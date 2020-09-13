import axios, { AxiosResponse } from 'axios';
import { Product, CategoryDetail, Description } from '../../types/mercadolibreApi/products';

// Maybe this should be an env variable?
const basePath = 'https://api.mercadolibre.com';

const getProducts = (searchText: string): Promise<AxiosResponse<{ results: Product[] }>> =>
  axios.get(`${basePath}/sites/MLA/search`, { params: { q: searchText } });

const getProduct = (productId: string): Promise<[AxiosResponse<Product>, AxiosResponse<Description>]> => {
  const productBasePath = `${basePath}/items/${productId}`;
  const productPromise = axios.get(productBasePath);
  const productDescriptionPromise = axios.get(`${productBasePath}/description`);
  return Promise.all([productPromise, productDescriptionPromise]);
};

const getCategory = (categoryId: string): Promise<AxiosResponse<CategoryDetail>> =>
  axios.get(`${basePath}/categories/${categoryId}`);

export default {
  getProducts,
  getProduct,
  getCategory
};
