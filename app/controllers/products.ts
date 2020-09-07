import { NextFunction, Request, Response } from 'express';

import productsService from '../services/products';
import { notFoundError } from '../errors';
import { Product } from '../../app/models/product';
import { formatProductListItem, formatProductDetail } from '../../app/formatters/product';
import { author } from '../../app/constants/author';

export function getUsers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  // TODO: remove the limit when pagination is implemented
  return productsService
    .findAll({ take: 4 })
    .then((products: Product[]) => {
      res.send({
        author,
        items: formatProductListItem(products)
      });
    })
    .catch(next);
}

export function getUserById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  return productsService
    .findProduct({ id: parseInt(req.params.id) })
    .then((product: Product) => {
      if (!product) {
        throw notFoundError('Product not found');
      }
      return res.send({
        author,
        item: formatProductDetail(product)
      });
    })
    .catch(next);
}
