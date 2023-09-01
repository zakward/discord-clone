const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  mail: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
