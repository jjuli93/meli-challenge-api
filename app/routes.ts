import { Application } from 'express';

import { getProducts, getProductById } from './controllers/products';

export const init = (app: Application): void => {
  app.get('/products', getProducts);
  app.get('/products/:id', getProductById);
};
