// dependencies
var React = require('react');

// child component
var Nav = require('Nav');

// component (stateless)
const Main = (props) => {
	return (
	    <div>
	    	<Nav/>
	    	{props.children}
	    </div>
	);
};

module.exports = Main;