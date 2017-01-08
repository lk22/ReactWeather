// dependencies
var React = require('react');
var {Link, IndexLink} = require('react-router');

const Nav = (props) => {
	return(
		<div>
			<IndexLink to="/" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>Get weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>About</Link>
			<Link to="/examples" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>Examples</Link>
			<h2>Nav Component</h2>
		</div>
	);
};

module.exports = Nav;