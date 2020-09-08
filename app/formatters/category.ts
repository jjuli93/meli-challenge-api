import { Category } from '../../app/models/category';

export const formatCategoryAsArray = (category: Category | null): string[] => {
  const categories: string[] = [];

  const addCategoryToArray = (categoryToAdd: Category): void => {
    categories.push(categoryToAdd.name);
    if (categoryToAdd.parentCategory) {
      addCategoryToArray(categoryToAdd.parentCategory);
    }
  };

  if (category) {
    addCategoryToArray(category);
  }
  return categories.reverse();
};
