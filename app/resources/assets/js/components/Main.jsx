// dependencies
var React = require('react');

// child component
var Nav = require('Nav');

// component (stateless)
const Main = (props) => {
	return (
	    <div>
	    	<Nav/>
	    	<div className="row">
	    		<div className="medium-8 large-4 small-centered columns">
	    			{props.children}
	    		</div>
	    	</div>
	    </div>
	);
};

module.exports = Main;