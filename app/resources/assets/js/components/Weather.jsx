var React = require('react');

// child weather components
var WeatherTitle = require('WeatherTitle');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');

// open weather map api
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState: function() {
		return {isLoading: false};
	},

	handleSearch: function(location){
		var that= this;

		this.setState({isLoading: true, errorMessage: undefined});

		openWeatherMap.getTemp(location).then(function(temp) {
			that.setState({location: location, temp: temp, isLoading: false});
		}, function(e) {
			that.setState({isLoading: false, errorMessage: e.message});
		});
	},

	// renderMessage: function() {
	// 	if(this.state.isLoading === true){
	// 		return <h3>Fetching weather data</h3>
	// 	} else if (this.state.temp && this.state.location) {
	// 		return <WeatherMessage temp={temp} location={location}/>
	// 	}
	// },

	render: function() {
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3>Fetching weather data</h3>
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>
			}
		}

		function renderError() {
			if (typeof errorMessage === 'string'){
				return (
					<ErrorModal title="Weather could not be found" message={errorMessage} />
				);
			}
		}

		return (
			<div>
				<WeatherTitle />
				<WeatherForm onSearch={this.handleSearch} />
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;