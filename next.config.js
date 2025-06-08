/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  trailingSlash: true,
  // basePath: isProd ? "/pcv-academy" : "",
  // assetPrefix: isProd ? "/pcv-academy/" : "",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "preset-default" },
                { name: "removeViewBox", active: false },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
