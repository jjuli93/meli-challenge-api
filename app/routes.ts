import { Application } from 'express';

import { getProducts, getProductById } from './controllers/products';
import { getExternalProducts, getExternalProductById } from './controllers/mercadolibreProducts';

const productsRoute = '/products';
const externalProductsRoute = '/api/products';

export const init = (app: Application): void => {
  app.get(productsRoute, getProducts);
  app.get(`${productsRoute}/:id`, getProductById);
  app.get(externalProductsRoute, getExternalProducts);
  app.get(`${externalProductsRoute}/:id`, getExternalProductById);
};
