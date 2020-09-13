import { NextFunction, Request, Response } from 'express';

import { Product } from '../../types/mercadolibreApi/products';
import { author } from '../../app/constants/author';
import mercadolibreApi from '../services/mercadolibreApi';
import {
  formatApiProductListItem,
  formatApiProductDetail,
  formatCategoryPath
} from '../formatters/mercadolibreProducts';
import { getMostRepeatedItem } from '../../app/utils/array';
import { HTTP_CODES } from '../../app/constants/http-status-codes';
import { notFoundError } from '../../app/errors';

export async function getExternalProducts(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const { q = '' } = req.query;
    const response = await mercadolibreApi.getProducts(q);
    const products = response.data.results;
    const formattedProducts = products.map(formatApiProductListItem);

    const categories = products.map((product: Product) => product.category_id);
    const mostRepeatedCategory = getMostRepeatedItem<string>(categories);
    let formattedCategories: string[] = [];
    if (mostRepeatedCategory) {
      const category = await mercadolibreApi.getCategory(mostRepeatedCategory);
      formattedCategories = formatCategoryPath(category.data);
    }

    return res.send({
      author,
      categories: formattedCategories,
      items: formattedProducts
    });
  } catch (error) {
    return next(error);
  }
}

export async function getExternalProductById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const productResponse = await mercadolibreApi.getProduct(req.params.id);
    const categoryResponse = await mercadolibreApi.getCategory(productResponse[0].data.category_id);
    return res.send({
      author,
      item: formatApiProductDetail(productResponse[0].data, productResponse[1].data, categoryResponse.data)
    });
  } catch (error) {
    if (error.response.data.status === HTTP_CODES.NOT_FOUND) {
      return next(notFoundError('product not found'));
    }
    return next(error.response.data);
  }
}
