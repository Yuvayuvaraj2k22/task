const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  phone: { type: Number, required: true },
  address:{ type: String,require:true}
});

module.exports = mongoose.model('User', UserSchema);
