import { Application } from 'express';

import { healthCheck } from './controllers/healthCheck';
import { getUsers, getUserById } from './controllers/users';

export const init = (app: Application): void => {
  app.get('/health', healthCheck);
  app.get('/users', getUsers);
  app.get('/users/:id', getUserById);
};
