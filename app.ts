/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import 'reflect-metadata';
import bodyParser, { OptionsJson, OptionsUrlencoded } from 'body-parser';
import cors from 'cors';
import config from './config';
import * as routes from './app/routes';
import { errorHandlerMiddleware } from './app/middlewares/error-handler';

const DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10;
const DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig: OptionsJson = {
  limit: Number(config.common.api.bodySizeLimit) || DEFAULT_BODY_SIZE_LIMIT
};

const bodyParserUrlencodedConfig: OptionsUrlencoded = {
  extended: true,
  parameterLimit: Number(config.common.api.parameterLimit) || DEFAULT_PARAMETER_LIMIT
};

const app = express();

app.use(cors());

// Client must send "Content-Type: application/json" header
app.use(bodyParser.json(bodyParserJsonConfig));
app.use(bodyParser.urlencoded(bodyParserUrlencodedConfig));

routes.init(app);

app.use(errorHandlerMiddleware);

export default app;
