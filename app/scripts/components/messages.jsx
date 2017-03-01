var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ajaxSetup = require('../utilities');

var messages = require('../models/user.js');

var ChatContainer = React.createClass({
  getInitialState: function(){
    ajaxSetup();
  },
  render: function(){
    return(
      <div>
        <ChatForm loginUser={this.chat}/>
      </div>
    )
  }
});

var ChatForm = React.createClass({
  render: function(){
    return (
      <div>
      </div>
    )
  }
});

module.exports = {
  ChatContainer,
  ChatForm
}
