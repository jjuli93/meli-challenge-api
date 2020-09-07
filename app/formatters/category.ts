import { Category } from '../../app/models/category';

export const formatCategoryAsArray = (category: Category) => {
  const categories: string[] = [];

  const addCategoryToArray = (categoryToAdd: Category) => {
    categories.push(categoryToAdd.name);
    if (categoryToAdd.parentCategory) {
      addCategoryToArray(categoryToAdd.parentCategory);
    }
  };

  addCategoryToArray(category);
  return categories;
};
