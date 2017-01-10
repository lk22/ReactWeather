var React = require('react');

// var WeatherMessage = React.createClass({
// 	render: function() {
// 		var {temp, location} = this.props;
// 		return ( <h3>it is {temp} in {location}</h3> )
// 	}
// });

var WeatherMessage = ({temp, location}) => {
	var styles = {textAlign: 'center'};
	return ( <h3 style={styles}>it is {temp} celsius in {location}</h3> )
};

module.exports = WeatherMessage;