module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  ignore: [
    "node_modules"
  ],
  plugins: [
    [
      "styled-components"
    ],
    [
      "babel-plugin-root-import",
      {
        paths: [
          {
            rootPathPrefix: '@',
            rootPathSuffix: 'src'
          }
        ]
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
          "babel-plugin-root-import",
          {
            paths: [
              {
                rootPathPrefix: '@',
                rootPathSuffix: 'src'
              }
            ]
          }
        ]
      ]
    }
  }
};
