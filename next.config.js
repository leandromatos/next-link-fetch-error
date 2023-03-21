/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'de', 'cs'],
  //   localeDetection: false,
  // },
}

module.exports = nextConfig
