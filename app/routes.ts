import { Application } from 'express';

import { healthCheck } from './controllers/healthCheck';
import { getUsers, getUserById } from './controllers/products';

export const init = (app: Application): void => {
  app.get('/health', healthCheck);
  app.get('/products', getUsers);
  app.get('/products/:id', getUserById);
};
