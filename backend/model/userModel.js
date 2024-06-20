const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: { type: String, minLength: 6, required: true },
  blogs:[{type: mongoose.Types.ObjectId, ref:"Blog", required: true}]
});

exports.User = mongoose.model('User', userSchema);