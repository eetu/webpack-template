const DevserverQRcodeWebpackPlugin = require('devserver-qrcode-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

const open =
  process.env.OPEN_BROWSER === 'true'
    ? true
    : [undefined, 'false'].includes(process.env.OPEN_BROWSER)
    ? false
    : process.env.OPEN_BROWSER;

module.exports = merge(common, {
  mode: 'development',
  entry: {
    vendor: ['@babel/polyfill'],
    main: ['./src/index.tsx'],
  },
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    port: 3000,
    host: '0.0.0.0' /* Allow connecting devserver from external IP-address */,
    public: 'localhost:3000' /* Open by default to localhost:3000 */,
    historyApiFallback: true,
    stats: 'minimal',
    open,
  },
  output: {
    pathinfo: false,
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              ['@babel/preset-env', { targets: { browsers: 'last 2 versions' } }],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-proposal-optional-chaining',
              'react-hot-loader/babel',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new DevserverQRcodeWebpackPlugin({
      size: 'small',
    }),
  ],
});
