// dependencies
var React = require('react');

// child component
var Nav = require('Nav');

// component (stateless)
const Main = (props) => {
	return (
	    <div>
	    	<Nav/>
	    	<h1>Main Component</h1>
	    	{props.children}
	    </div>
	);
};

module.exports = Main;