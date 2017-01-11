var webpack = require('webpack');

module.exports = {
	 entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/resources/assets/js/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/resources/assets/js/components/Main.jsx',
			Nav: 'app/resources/assets/js/components/Nav.jsx',
			Weather: 'app/resources/assets/js/components/Weather.jsx',
			WeatherTitle: 'app/resources/assets/js/components/WeatherTitle.jsx',
			WeatherForm: 'app/resources/assets/js/components/WeatherForm.jsx',
			WeatherMessage: 'app/resources/assets/js/components/WeatherMessage.jsx',
			About: 'app/resources/assets/js/components/About.jsx',
			Example: 'app/resources/assets/js/components/Example.jsx',

			ErrorModal: 'app/resources/assets/js/components/modals/ErrorModal.jsx',

			openWeatherMap: 'app/api/openWeatherMap.jsx',

			applicationStyles: 'app/resources/assets/css/styles.css'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
}