const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@font-family': 'JetBrains Mono, monospace' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};