/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-cssnext'),
    require('postcss-text-remove-gap', {
      defaultFontFamily: 'Open Sans',
      defaultLineHeight: '0',
    }),
    require('postcss-easy-media-query', {
      breakpoints: {
        tablet: 600,
        desktop: 1024,
      },
    }),
  ],
}
