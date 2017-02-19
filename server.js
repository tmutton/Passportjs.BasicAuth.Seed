'use strict';

const express = require('express');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

const app = express();

// Basic authentication
passport.use(new BasicStrategy({ failWithError: false },
  function(username, password, done) {
    if (username == 'admin' && password == 'password') return done(null, true);
    else return done(null, false);
  }
));

// private end point (requires authentication)
app.get('/private',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.send('Your login has been authenticated');
  });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('App listening on port ${PORT}');
  console.log('Press Ctrl+C to quit.');
});