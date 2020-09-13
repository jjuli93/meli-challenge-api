import { Product } from '../../app/models/product';
import { formatCategoryAsArray } from './category';

export const formatProductListItem = (products: Product[]) =>
  products.map((product: Product) => ({
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency.code,
      amount: product.price,
      decimals: product.priceDecimals
    },
    picture: product.pictureUrl,
    condition: product.condition.name,
    freeShipping: product.freeShipping,
    city: product.user.sellAdressCity.name
  }));

export const formatProductDetail = (product: Product) => ({
  id: product.id,
  title: product.title,
  price: {
    currency: product.currency.code,
    amount: product.price,
    decimals: product.priceDecimals
  },
  picture: product.pictureUrl,
  condition: product.condition.name,
  freeShipping: product.freeShipping,
  soldQuantity: product.soldQuantity,
  description: product.description,
  categories: formatCategoryAsArray(product.category)
});
