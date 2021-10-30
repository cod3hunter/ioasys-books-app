module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
        alias: {
          '@components': './src/components',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@styled': './src/styled-components',
          '@theme': './src/Theme',
          '@services': './src/services',
        },
      },
    ],
  ],
};
