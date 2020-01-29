const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              experimentalWatchApi: true,
            },
          },
        ],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(png|svg|jpg|gif|woff|ttf|otf)$/, // add more asset types here
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new EnvironmentPlugin(['MESSAGE']), // Add environment variables that are passed to React components here
    new ForkTsCheckerWebpackPlugin(),
    new CopyWebpackPlugin(['public']),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
