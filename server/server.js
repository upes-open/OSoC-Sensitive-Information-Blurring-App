
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const DBconnection = require("./database/db.js");



const app =express();

const PORT=8000;

const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const session = require('express-session');
const uuid = require('uuid');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const User = require('./models/User.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    genid: (req) => uuid.v4(),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8000/auth/google/callback',
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        if (req.user) {
          // User is already authenticated via local strategy, link the Google account
          req.user.googleId = profile.id;
          await req.user.save();
          return done(null, req.user);
        } else {
          // User is signing in using Google for the first time, create a new user
          const user = await User.findOne({ googleId: profile.id });
          if (!user) {
            const newUser = new User({
              email: profile.emails[0].value,
              googleId: profile.id,
              displayName: profile.displayName, // Set the displayName manually
            });
            await newUser.save();
            return done(null, newUser);
          }
          return done(null, user);
        }
      } catch (err) {
        return done(err);
      }
    }
  )
  );

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      console.log("Deserialized user:", user); // Add this line to log the user object
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
}));

app.post('/register', async (req, res) => {
  const { email, password, googleId } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // You can add additional validation for the email and password here, if needed.

    // Check if a user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User with the provided email already exists.' });
    }

    let user;
    if (googleId) {
      // Google authentication
      user = new User({
        email: email,
        googleId: googleId,
      });
    } else {
      // Local authentication
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ email, password: hashedPassword });
    }

    await user.save();
    return res.json({ message: 'Registration successful.' });
  } catch (err) {
    console.error('Error registering user:', err);
    return res.status(500).json({ message: 'Error registering user.' });
  }
});



app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ message: 'Successfully authenticated! Welcome to the dashboard.' });
  } else {
    res.status(401).json({ message: 'Authentication failed. Please log in first.' });
  }
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }
  ));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure'
  })
);
app.get('/check-session', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
});

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});


app.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      console.log('Error while logging out:', err);
      return next(err);
    }

    req.session.destroy(function (err) {
      if (err) {
        console.log('Error while destroying the session:', err);
        return next(err);
      }

      // For logging out the Google account, redirect the user to Google's logout URL
      // and pass the returnTo parameter to specify the URL to which the user should be redirected after logging out.
      res.send('Goodbye!');
    });
  });
});




app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))

DBconnection()