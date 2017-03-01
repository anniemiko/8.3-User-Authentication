var Backbone = require('backbone');
var React = require('react');

var User = Backbone.Model.extend({

});

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: 'https://tiny-parse-server.herokuapp.com/users'

});

module.exports = {
  User,
  UserCollection
}
