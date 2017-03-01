var Backbone = require('backbone');
var React = require('react');

var Message = Backbone.Model.extend({

});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'https://tiny-parse-server.herokuapp.com/classes/Message'

});

module.exports = {
  Message,
  MessageCollection
}
