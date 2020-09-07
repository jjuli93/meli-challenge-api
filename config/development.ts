exports.config = {
  environment: 'development',
  common: {
    database: {
      database: process.env.DB_NAME
    }
  },
  isDevelopment: true
};
