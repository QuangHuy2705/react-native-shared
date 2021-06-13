module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~/ui': '../employee-portal-shared/src/components',
          '~/assets': '../employee-portal-shared/assets',
          '~/shared': '../employee-portal-shared/src',
          '~': './src'
        }
      }
    ],
  ]
};
