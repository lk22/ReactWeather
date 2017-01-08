module.exports = {
	entry: './app/resources/assets/js/app.jsx',
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

			openWeatherMap: 'app/api/openWeatherMap.jsx'
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