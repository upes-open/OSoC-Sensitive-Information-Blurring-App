const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: function () {
      return !this.googleId; // Required only if local strategy is used
    },
  },
  googleId: {
    type: String,
    sparse: true, // Make the field optional (multiple documents can have a null value)
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
