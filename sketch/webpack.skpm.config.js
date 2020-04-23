const path = require('path');
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - wether the config is for a plugin command or a resource
 **/
module.exports = function (config, isPluginCommand) {
  config.resolve = {
    ...config.resolve,
    extensions: [...config.resolve.extensions, '.jsx'],
    alias: {
      ...config.resolve.alias,
      react: path.resolve(__dirname, './node_modules/react/'),
      '#components': path.resolve(__dirname, '../components'),
      'styled-components': path.resolve(__dirname, '../components/styled'),
      'styled-system': path.resolve(__dirname, './node_modules/styled-system'),
    },
  };
};
