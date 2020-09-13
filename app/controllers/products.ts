import { NextFunction, Request, Response } from 'express';

import { Raw } from 'typeorm';
import productsService from '../services/products';
import { notFoundError } from '../errors';
import { formatProductListItem, formatProductDetail } from '../../app/formatters/product';
import { author } from '../../app/constants/author';
import { getCategoryTree } from '../../app/services/category';
import { getMostRepeatedCategory } from '../../app/utils/category';
import { formatCategoryAsArray } from '../../app/formatters/category';

export async function getProducts(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    // TODO: remove the limit when pagination is implemented
    const { q = '' } = req.query;

    const products = await productsService.findAll({
      take: 4,
      where: { title: Raw((alias: string) => `${alias} ILIKE '%${q}%'`) },
      order: { soldQuantity: 'DESC' }
    });

    const mostRepeatedCategory = getMostRepeatedCategory(products);
    const categoryTree = mostRepeatedCategory ? await getCategoryTree(mostRepeatedCategory) : null;

    return res.send({
      author,
      categories: formatCategoryAsArray(categoryTree),
      items: formatProductListItem(products)
    });
  } catch (error) {
    return next(error);
  }
}

export async function getProductById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  try {
    const product = await productsService.findProduct({ id: parseInt(req.params.id) });

    if (!product) {
      throw notFoundError('Product not found');
    }

    const categoryTree = await getCategoryTree(product.category);
    product.category = categoryTree;
    return res.send({
      author,
      item: formatProductDetail(product)
    });
  } catch (error) {
    return next(error);
  }
}
