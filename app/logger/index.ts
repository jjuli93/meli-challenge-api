/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

const logger = {
  info: (data: any): void => {
    console.log(data);
  },
  error: (data: any): void => {
    console.error(data);
  }
};

export default logger;
