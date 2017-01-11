var React = require('react');
var {Link} = require('react-router');

const Example = (props) => {
	return (
	    <div>
			<h1 className="page-title text-center">Examples</h1>
			<p>Here are a few examples to try out</p>
			<ol>
				<li>
					<Link to="/?location=Copenhagen">Copenhagen, Denmark</Link>
				</li>
				<li>
					<Link to="/?location=Rio">Rio, Brazil</Link>
				</li>
				<li>
					<Link to="/?location=London">London, England</Link>
				</li>
			</ol>
		</div>
	);
}

module.exports = Example;