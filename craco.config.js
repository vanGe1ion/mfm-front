const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@UI": path.resolve(__dirname, "src/components/UI/"),
      "@globalTypes": path.resolve(__dirname, "src/types"),
      "@globalStyle": path.resolve(__dirname, "src/style"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@config": path.resolve(__dirname, "src/config"),
      "@media": path.resolve(__dirname, "src/media/"),
      "@queries": path.resolve(__dirname, "src/graphql/queries/"),
      "@mutations": path.resolve(__dirname, "src/graphql/mutations/"),
    },
  },
};
