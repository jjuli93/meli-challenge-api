import { Product } from '../../app/models/product';
import { Category } from '../../app/models/category';

export const getMostRepeatedCategory = (products: Product[]): Category | null => {
  const categories = products.map((product: Product) => product.category);

  if (categories.length === 0) {
    return null;
  }

  const categoriesMap = {};
  let mostRepeatedCategory = categories[0];
  let maxCount = 1;

  categories.forEach((category: Category) => {
    if (categoriesMap[category.id]) {
      categoriesMap[category.id]++;
    } else {
      categoriesMap[category.id] = 1;
    }
    if (categoriesMap[category.id] > maxCount) {
      mostRepeatedCategory = category;
      maxCount = categoriesMap[category.id];
    }
  });

  return mostRepeatedCategory;
};
