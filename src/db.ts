import mongoose, { model, Schema } from "mongoose";
// Define schema
const UserSchema = new Schema({
  username: { type: String, unique: true }
  password: String,
});

// Create model
export const UserModel = model("User", UserSchema);
const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{type: mongoose.Types.ObjectId, ref:"Tag"}],
  userId:{ type: mongoose.Types.ObjectId, ref: "User",requires: true}
});
export const ContentModel=model("Content",ContentSchema);
