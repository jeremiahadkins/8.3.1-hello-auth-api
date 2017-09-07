const express = require('express');
const models = require('./models');
const bodyParser = require('body-parser');
const animalController = require('./controllers/animal');
const userController = require('./controllers/user');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const AnonymousStrategy = require('passport-anonymous').Strategy;

// we need body-parser to get req data
const app = express();
app.use(bodyParser.json());

passport.use(new AnonymousStrategy());
passport.use(new BasicStrategy((username, password, done) => {
  models.User.findOne({
    where: {
      username: username
    }
  }).then((user) => {
    if(!user) {
      return done(null, false);
    } else if (user.password !== password) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  });
}));

app.get('/', passport.authenticate('anonymous', 'basic', {session: false}), userController.detail);
// app.get('/', userController.detail);
app.post('/animals', animalController.create);
app.get('/animals/:id', animalController.detail);
app.get('/animals', animalController.list);


app.listen(3000);
