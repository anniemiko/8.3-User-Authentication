var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ajaxSetup = require('../utilities');

var UserCollection = require('../models/user.js').UserCollection;
var User = require('../models/user.js').User;

var LoginContainer = React.createClass({
  // logInUser: function(){
  //
  // },
  render: function(){
    return(
      <div>
        <LoginForm loginUser={this.loginUser}/>
        <SignupForm signUp={this.signUp} />
      </div>
    )
  }
});

var LoginForm = React.createClass({
  handleLogin: function(e){
    e.preventDefault();
    var username = $(form).find('#email-login').val();
    var password = $(form).find('#password-login').val();
    var user = {
      username: username,
      password: password
    }
    var userCollection = new UserCollection();
    userCollection.create(user);
    // submit to api,
    // if user exists, check password, if pw = pw, get a token back, stoe to local storage, then route to chat page,
    // if no username, alert to create a new user/check username or password.
  },
  render: function(){
    return (
      <div className="col-md-6">

      <h1>Please Login</h1>

      <form id="login">
            <div className="form-group">
              <label htmlFor="email-login">Email address</label>
              <input className="form-control" name="email" id="email-login" type="email" placeholder="Enter email here" />
            </div>

            <div className="form-group">
              <label htmlFor="password-login">Password</label>
              <input className="form-control" name="password" id="password-login" type="password" placeholder="Password please" />
            </div>

            <input onClick={this.handleLogin} className="btn btn-primary" type="submit" value="Beam Me Up!" />
          </form>
      </div>
    )
  }
});

var SignupForm = React.createClass({
  // submit username and pw to api, get token and store to local storage.
  // run setupajax function and pass in token
  render: function(){
    return (
      <div className="col-md-6">

        <h1>No Account? Sign up!</h1>

        <form id="signup">

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="signup-email" type="text" className="form-control" name="email" placeholder="What is your email address?"/>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="signup-password" type="password" className="form-control" placeholder="Please don't share this!"/>
          </div>

          <input type="submit" className="btn btn-primary" value="Sign up"/>

        </form>
      </div>
    )
  }
})

module.exports = {
  LoginContainer,
  LoginForm,
  SignupForm
}
