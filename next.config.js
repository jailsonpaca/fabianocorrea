const withPlugins = require("next-compose-plugins");
const sass = require("@zeit/next-sass");
const css = require("@zeit/next-css");
const images = require("next-images");
const nextConfig = {
  //optionalCatchAll: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
module.exports = withPlugins(
  [
    [
      sass,
      {
        cssLoaderOptions: {
          // this solves the issue
          url: false,
        },
      },
    ],
    [
      css,
      {
        cssLoaderOptions: {
          // this solves the issue
          url: false,
        },
      },
    ],
    [images],
  ],
  nextConfig
);
