const webpack = require('webpack')
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/geospoc/' : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl',
      }),
    ],
  },
}