var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');
import router from 'app/router/';

// Components
import TodoApp from 'TodoApp';
import Login from 'Login';

// Redux & Firebase
var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});
store.dispatch(actions.startAddTodos());

// Load Foundation
$(document).foundation();

// Load Custom Styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
