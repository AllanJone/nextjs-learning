const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */

const moduleExports = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  sentry: {
    hideSourceMaps: true,
  },
}

const sentryWebpackPluginOptions = {
  silent: true
};

module.exports = withSentryConfig(
  moduleExports,
  sentryWebpackPluginOptions
);



