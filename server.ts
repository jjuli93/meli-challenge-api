// TODO: remove commented lines if you want to run the proyect with a database
// import { createConnection, Connection } from 'typeorm';

import app from './app';
// import * as migrationsManager from './migrations';
// import typeOrmConfig from './config/typeorm';
import config from './config';
import logger from './app/logger';

const defaultPort = 8080;

const port = config.common.api.port || defaultPort;

Promise.resolve()
  // .then(() => createConnection(typeOrmConfig))
  // .then((connection: Connection) => migrationsManager.check(connection))
  .then(() => {
    app.listen(port);

    logger.info(`Listening on port: ${port}`);
  })
  .catch((error: Error) => logger.error(error.stack));
