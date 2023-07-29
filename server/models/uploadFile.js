import mongoose from "mongoose";
import UserProfile from "./user";

const uploadedFileSchema = new mongoose.Schema
({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true }, // Custom primary key
  user: { type: mongoose.Schema.Types.ObjectId, ref: "UserProfile", required: true },
  path: { type: String, required: true },
  name: { type: String, required: true },
  uploaded_at: { type: Date, required: true },
});

const UploadedFile = mongoose.model("UploadedImage", uploadedFileSchema);

export default UploadedFile;