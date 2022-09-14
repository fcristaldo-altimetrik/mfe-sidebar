const common = require('./webpack.config');
const { merge } = require('webpack-merge');

const prodConfig = {
  output: {
    uniqueName: 'funds',
    publicPath: 'https://mfe-sidebar.vercel.app/',
    scriptType: 'text/javascript',
  },
};
module.exports = merge(common, prodConfig);
