import { getDecimalPart } from '../utils/numbers';
import { Product, Category, Description, CategoryDetail } from '../../types/mercadolibreApi/products';

const getPriceInteger = (price: number) => Math.floor(price);

export const formatCategoryPath = (category: CategoryDetail) =>
  category.path_from_root.map((cat: Category) => cat.name);

export const formatApiProductListItem = (product: Product) => ({
  id: product.id,
  title: product.title,
  price: {
    currency: product.currency_id,
    amount: getPriceInteger(product.price),
    decimals: getDecimalPart(product.price, 2)
  },
  picture: product.thumbnail,
  condition: product.condition,
  freeShipping: product.shipping.free_shipping,
  city: product.address.state_name
});

export const formatApiProductDetail = (
  product: Product,
  description: Description,
  category: CategoryDetail
) => ({
  id: product.id,
  title: product.title,
  price: {
    currency: product.currency_id,
    amount: getPriceInteger(product.price),
    decimals: getDecimalPart(product.price, 2)
  },
  picture: product.pictures[0].url || product.thumbnail,
  condition: product.condition,
  freeShipping: product.shipping.free_shipping,
  soldQuantity: product.sold_quantity,
  description: description.plain_text,
  categories: formatCategoryPath(category)
});
