const sassResourcesLoader = require('craco-sass-resources-loader');
const CracoEslintWebpackPlugin = require('craco-eslint-webpack-plugin');

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/theme.scss',
      },
    },
    {
      plugin: CracoEslintWebpackPlugin,
      options: {
        skipPreflightCheck: true,
        eslintOptions: {
          files: 'src/**/*.{js,jsx,ts,tsx}',
          lintDirtyModulesOnly: true,
        },
      },
    },
  ],
}