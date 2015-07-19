var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./components/App.react.jsx');
var Search = require('./components/search/search.react.jsx');
var SearchResault = require('./components/search/searchResault.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={App}>
  	<DefaultRoute handler={Search} />
    <Route name="search" path="/search" handler={Search}/>
    <Route name="search_resault" path="/search_resault" handler={SearchResault}/>
	</Route>
);
