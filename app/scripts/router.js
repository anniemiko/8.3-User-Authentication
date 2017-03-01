var $ = require('jquery')
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var ajaxSetup = require('./utilities');
var LoginContainer = require('./components/login.jsx').LoginContainer;
var ChatContainer = require('./components/messages.jsx').ChatContainer;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    messages: 'messages'
  },
  intialize: function(){
    ajaxSetup();
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginContainer, {router: this}),
      document.getElementById('app')
    );
  },
  messages: function(){
    ReactDOM.render(
      React.createElement(ChatContainer, {router: this}),
      document.getElementById('app')
    );
  }
})

var router = new AppRouter();

module.exports = router;
