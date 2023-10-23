const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  registration_date: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
