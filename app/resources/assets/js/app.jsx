// dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, HashHistory} = require('react-router');

// foundation CSS
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// page components
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

// render application
ReactDOM.render(
  	<Router history={HashHistory}>
   		<Route path="/" component={Main}>
   			<Route path="about" component={About} />
   			<Route path="examples" component={Example} />
  			<IndexRoute component={Weather} />
  		</Route>
  	</Router>,
  	document.getElementById('app')
);