Simple webpack template with React embedded

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

## Assets

All assets can be found under /assets, add more asset types if needed into webpack.common.js

## Directory structure

- **assets**, all assets can go here and they are copied under _dist_
- **dist**, build directory
- **public**, public files e.g. index.html template they are copied under _dist_ as is
- **src**, all source code
