module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "styled-components"
    ],
    [
      "babel-plugin-root-import", {
        rootPathPrefix: '@',
        rootPathSuffix: 'src'
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        [
          "styled-components"
        ],
        [
          "babel-plugin-root-import", {
            rootPathPrefix: '@',
            rootPathSuffix: 'src'
          }
        ]
      ]
    }
  }
};
