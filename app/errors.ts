import { createInternalError } from './middlewares/error-handler';
import { HTTP_CODES } from './constants/http-status-codes';

export const DATABASE_ERROR = 'database_error';
export const databaseError = createInternalError(DATABASE_ERROR, HTTP_CODES.SERVICE_UNAVAILABLE);

export const DEFAULT_ERROR = 'default_error';
export const defaultError = createInternalError(DEFAULT_ERROR, HTTP_CODES.INTERNAL_SERVER_ERROR);

export const NOT_FOUND_ERROR = 'not_found_error';
export const notFoundError = createInternalError(NOT_FOUND_ERROR, HTTP_CODES.NOT_FOUND);
