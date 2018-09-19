## Howto run

### Running in development mode

- npm install
- cp .env.sample .env
- npm start

### Building production build

- npm install
- cp .env.sample .env
- npm run build

## Environment variables

Webpack reads environment variables from .env file which should contain all variables that are in .env.sample or defined in system vars.

for overriding or defining environment variable outside .env file:

`MESSAGE="FOOBAR" npm start`
