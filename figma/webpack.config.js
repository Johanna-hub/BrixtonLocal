const path = require('path')
const configure = require('react-figma-webpack-config')

module.exports = configure({
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '#components': path.resolve(__dirname, '../components'),
      react: path.resolve(__dirname, './node_modules/react/'),
      'react-figma': path.resolve(__dirname, './node_modules/react-figma/'),
      'styled-components': path.resolve(__dirname, './src/styled'),
      'styled-system': path.resolve(__dirname, './node_modules/styled-system'),
    },
  },
})
