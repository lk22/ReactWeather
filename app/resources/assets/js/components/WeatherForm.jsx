var React = require('react');

var WeatherForm = React.createClass({

	onFormSubmit: function(e){
		e.preventDefault();

		var location = this.refs.location.value;

		if(location.length > 0){
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},

	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input type="text" ref="location" placeholder="Enter your city here" />
				</div>
				<div>
					<button className="button expanded hollow">See Weather</button>
				</div>
			</form>
		);
	}
});

module.exports = WeatherForm;