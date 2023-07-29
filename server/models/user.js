import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema
({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true }, // Custom primary key
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
