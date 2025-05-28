// next.config.js

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
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
                // ✅ CORRECT format: object with "name" key
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
  output: "export", // <--- penting!
  basePath: isProd ? "/nama-repo-kamu" : "",
  assetPrefix: isProd ? "/nama-repo-kamu/" : "",
};

module.exports = nextConfig;
