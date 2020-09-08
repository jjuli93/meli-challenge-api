import { TreeRepository, getTreeRepository } from 'typeorm';
import { Category } from '../../app/models/category';

const categoryTreeRepository = (): TreeRepository<Category> => getTreeRepository(Category);

export function getCategoryTree(category: Category): Promise<Category> {
  return categoryTreeRepository().findAncestorsTree(category);
}
