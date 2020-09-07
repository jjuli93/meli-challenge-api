import { getRepository, FindManyOptions, FindConditions, Repository } from 'typeorm';
import { Product } from '../models/product';

const productRepository = (): Repository<Product> => getRepository(Product);

export function findProduct(options?: FindConditions<Product>): Promise<Product | undefined> {
  return productRepository().findOne(options);
}

export function findAll(options?: FindManyOptions<Product>): Promise<Product[]> {
  return productRepository().find(options);
}

export default {
  findAll,
  findProduct
};
