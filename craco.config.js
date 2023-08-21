// eslint-disable-next-line import/no-extraneous-dependencies, import/no-import-module-exports, @typescript-eslint/no-var-requires
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));

          webpackConfig.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          });

          return webpackConfig;
        },
      },
    },
  ],
};
