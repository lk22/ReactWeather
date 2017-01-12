var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');


var ErrorModal = React.createClass({

	getDefaultProps(){
		return {
			title: 'Error'
		};
	},

	// when the component did mount
	componentDidMount: function() {
		var {title, message} = this.props;
			var modalMarkup = (
			 <div className="reveal text-center" id="errorModal" data-reveal="">
					<h1>Weather not found</h1>
					<p className="lead">{title}</p>
					<p>{message}</p>
					<button class="close-button button hollow" data-close="" aria-label="Close modal" type="button">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($('#errorModal'));
		modal.open();
	},

	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},

	render: function() {
		return ( <div></div> );
	}
});

module.exports = ErrorModal;