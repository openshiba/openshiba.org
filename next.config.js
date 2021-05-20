/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const DashboardPlugin = require('webpack-dashboard/plugin');

const sharedPlugins = [withImages];
let devPlugins = [];
let prodPlugins = [];

if (process.env.NODE_ENV === 'production') {
  prodPlugins = [
    withPWA({
      pwa: {
        dest: 'public',
        runtimeCaching,
      },
    })
  ];
} else {
  devPlugins = [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true',
    }),
  ];
}

module.exports = withPlugins([...devPlugins, ...prodPlugins, ...sharedPlugins], {
  webpack: (config, options) => {
    const { isServer } = options;

    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    // Add webpack dashboard
    config.plugins.push(new DashboardPlugin());
    return config;
  },
  future: {
    webpack5: true,
  },
});
