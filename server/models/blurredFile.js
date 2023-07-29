import mongoose from "mongoose";
import UploadedFile from "./uploadFile";
import UserProfile from "./user";

const blurredFileSchema = new mongoose.Schema
({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true }, // Custom primary key
  user: { type: mongoose.Schema.Types.ObjectId, ref: "UserProfile", required: true },
  original_image: { type: mongoose.Schema.Types.ObjectId, ref: "UploadedFile", required: true },
  blurred_image_path: { type: String, required: true },
  blurred_image_name: { type: String, required: true },
  blurred_at: { type: Date, required: true },
});

const BlurredFile = mongoose.model("BlurredImage", blurredFileSchema);

export default BlurredFile;