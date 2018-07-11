const { resolve } = require("path");

module.exports = {
  extraNodeModules: {
    "react-native": resolve(__dirname, "./node_modules/react-native")
  },
  getProjectRoots() {
    return [
      resolve(__dirname, "./packages/core"),
      resolve(__dirname, "./packages/app"),
      resolve(__dirname, "./packages/components"),
      resolve(__dirname)
    ];
  },
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};
