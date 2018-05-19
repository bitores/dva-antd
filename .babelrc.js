module.exports = {
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          components: './client/components',
        },
      },
    ],
  ],
};
