import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  occupation: {
    type: String,
    required: false,
  },
  ccode: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;