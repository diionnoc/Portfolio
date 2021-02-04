const path = require(`path`);
const withImages = require(`next-images`);

(module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, `styles`)],
  },
  target: `experimental-serverless-trace`,
}),
  (module.exports = withImages({
    esModule: true,
    fileExtensions: [`jpg`, `jpeg`, `png`, `gif`],
    webpack(config, options) {
      return config;
    },
  }));
