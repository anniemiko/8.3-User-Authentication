var Backbone = require('backbone');
var React = require('react');

var User = Backbone.Model.extend({
  urlRoot: '/users'
  }, {
    login: function(creds, callback){
      var url = '.../login?' + $.param(creds);
      $.get(url).then(data => {
        var newUser = new User(data);
        User.store(newUser);
        callback(newUser);
      });
    },
    signup: function(creds){
      var newUser = new User(creds);
      newUser.save().then(() => {
        User.store(newUser);
      });
      return newUser;
    },
    store: function(user){
      localStorage.setItem('user', JSON.stringify(user.toJSON()));
    },
    current: function(){
      var user = localStorage.getItem('user');

      // if no user in local storage, bail
      if(!user){
        return false;
      }

      return new User(JSON.parse(user));
    }
  });

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: 'https://tiny-parse-server.herokuapp.com/users'

});

module.exports = {
  User,
  UserCollection
}
