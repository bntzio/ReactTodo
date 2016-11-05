var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var TodoApp = require('TodoApp');

// Redux
var actions = require('actions');
var store = require('configureStore').configure();
store.subscribe(() => {
  console.log('New state', store.getState());
});
store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// Load Foundation
$(document).foundation();

// Load Custom Styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
