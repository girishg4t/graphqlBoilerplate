var uuidv4 = require('uuid/v4');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const GUID = require('mongoose-guid');
// Will add the UUID type to the Mongoose Schema types
// require('mongoose-uuid2')(mongoose);
// var UUID = mongoose.Types.UUID;

const UserSchema = new Schema({
  id: {
    type: String,
    required: false,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  }
}, { id: false, collection: 'User' });

const User = mongoose.model("User", UserSchema);

export default User;