const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@UI": path.resolve(__dirname, "src/components/UI/"),
      "@globalTypes": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@consts": path.resolve(__dirname, "src/consts/"),
      "@config": path.resolve(__dirname, "src/config"),
    },
  },
};
