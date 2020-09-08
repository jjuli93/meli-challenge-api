import { Application } from 'express';

import { healthCheck } from './controllers/healthCheck';
import { getProducts, getProductById } from './controllers/products';

export const init = (app: Application): void => {
  app.get('/health', healthCheck);
  app.get('/products', getProducts);
  app.get('/products/:id', getProductById);
};
