type ENV_VAR = string | undefined;

type dialect = 'postgres' | 'mysql' | 'sqlite' | 'mssql' | 'oracle';

export interface IConfig {
  isDevelopment?: boolean;
  isProduction?: boolean;
  isTesting?: boolean;
  environment: string;
  common: {
    database: {
      host: string;
      port: number;
      database: string;
      username: string;
      password: string;
      type: dialect;
    };
    api: {
      bodySizeLimit?: ENV_VAR;
      parameterLimit?: ENV_VAR;
      port: ENV_VAR;
    };
  };
  todos: {
    baseURL: ENV_VAR;
  };
}
