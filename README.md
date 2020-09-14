## First steps

### Installing node
Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm)
Nvm approach is preferred.

### Install dependencies
Run `npm install` or `yarn` from rootpath of the project.

### Database configuration (for this proyect this is optional)
Before running the app, make sure you have [postgresql installed](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04) and a db created, to create it run the following steps inside a psql terminal:
1. `CREATE DATABASE db_project_name;`
2. `\c db_project_name;`
3. `CREATE ROLE "project_name" LOGIN CREATEDB PASSWORD 'project_name';`

Then, set in `.env` file following variables:

```
DB_HOST="localhost"
DB_PORT=5432
DB_USERNAME="project_name"
DB_PASSWORD="project_name"
DB_NAME="db_project_name"
DB_NAME_DEV="db_project_name_dev"
DB_NAME_TEST="db_project_name_test"
```

### Migrations

To create a migration from changes in models, run `npm run migrations-generate <migration_name>`
Migrations should be generated after each change you made to your models.

To create a migration manually, run `npm run migrations-create <migration_name>`.

To run migrations, execute `npm run migrations`.

### Starting your app
Now, to start your app run `npm start` in the rootpath of the project. Then access your app at **localhost:port**, where the port was logged into the console at startup.

## Development

### Environments
By default, the environment will be **development**, but you can change it easily using the **NODE_ENV** environmental variable.

#### Environment variables
`Dotenv` is used for managing environment variables. They are stored in the `/.env` file. Take into account that the variables defined in the `bashrc` are not overrided.

The environment variables should be added to the `.env` file in the form of `NAME=VALUE`, as the following example:
```
DB_USERNAME="root"
DB_PASS="superpass"
DB_PASSWORD="superpass"
PORT=8081
CLIENTS_API="http://api.clients.example.org/"
```

**Remember not to push nor commit the `.env` file.**

### Logging
To log useful information of your program to the console you just need to import the logger located at `app/logger`. There are two possible types of logging: `info` and `error`. You should use them depending on the type of message you want to show.

Here is an example snippet:

```javascript
const logger = require('/app/logger');

if (error) { 
    logger.error('There is an error');
} else {
    logger.info('There is no error');
}
```

### Debugging

In order to debug our Node.js application, we enable 'sourceMap' in `tsconfig.json`, this compiler option generates corresponding `.map` files from original Javascipt counterpart. This change is mandatory to attach a debugger, otherwise it wouldn't be able to match transpiled files with their originals.

In VSCode, you will need to add an `./.vscode/launch.json` file in order to launch the debugger. You can use the following:

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/server.ts",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "restart": true,
      "outFiles": [
        "${workspaceFolder}/dist/**/*.js"
      ]
    }
  ]
}
```
