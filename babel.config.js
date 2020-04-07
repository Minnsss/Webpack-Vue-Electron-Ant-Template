module.exports = {
    presets: ["@babel/preset-env"],
    plugins: [
      "@babel/plugin-transform-runtime",
      [
        "import",
        { libraryName: "ant-design-vue", libraryDirectory: "lib", style: "css" }
      ]
    ]
  };