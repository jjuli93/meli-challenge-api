import { NextFunction, Request, Response } from 'express';

import { Raw } from 'typeorm';
import productsService from '../services/products';
import { notFoundError } from '../errors';
import { Product } from '../../app/models/product';
import { formatProductListItem, formatProductDetail } from '../../app/formatters/product';
import { author } from '../../app/constants/author';
import { getCategoryTree } from '../../app/services/category';
import { getMostRepeatedCategory } from '../../app/utils/category';
import { formatCategoryAsArray } from '../../app/formatters/category';

export function getProducts(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  // TODO: remove the limit when pagination is implemented
  const { search = '' } = req.query;
  return productsService
    .findAll({ take: 4, where: { title: Raw((alias: string) => `${alias} ILIKE '%${search}%'`) } })
    .then(async (products: Product[]) => {
      const mostRepeatedCategory = getMostRepeatedCategory(products);
      const categoryTree = mostRepeatedCategory ? await getCategoryTree(mostRepeatedCategory) : null;

      res.send({
        author,
        categories: formatCategoryAsArray(categoryTree),
        items: formatProductListItem(products)
      });
    })
    .catch(next);
}

export function getProductById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return productsService
    .findProduct({ id: parseInt(req.params.id) })
    .then(async (product: Product) => {
      if (!product) {
        throw notFoundError('Product not found');
      }
      const categoryTree = await getCategoryTree(product.category);
      product.category = categoryTree;
      return res.send({
        author,
        item: formatProductDetail(product)
      });
    })
    .catch(next);
}
