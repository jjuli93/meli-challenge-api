import { ConnectionOptions } from 'typeorm';

import config from '.';

const typeOrmConfig: ConnectionOptions = {
  ...config.common.database,
  entities: ['./app/models/**/*'],
  migrations: ['./migrations/migrations/*'],
  subscribers: ['./subscribers/**/*'],
  cli: {
    entitiesDir: './app/models',
    migrationsDir: './migrations/migrations',
    subscribersDir: './subscribers'
  }
};

export default typeOrmConfig;

module.exports = typeOrmConfig;
