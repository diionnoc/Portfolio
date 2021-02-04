const withImages = require(`next-images`);

module.exports = withImages({
  esModule: true,
  fileExtensions: [`jpg`, `jpeg`, `png`, `gif`],
  target: `experimental-serverless-trace`,
  webpack(config, options) {
    return config;
  },
});
