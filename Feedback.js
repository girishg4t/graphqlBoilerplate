var uuidv4 = require('uuid/v4');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const GUID = require('mongoose-guid');


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

const FeedbackSchema = new Schema({
  id: {
    type: String,
    required: false,
    unique: true
  },
  userId:{
    type: String,
    required: false,
    unique: true
  },
  userEmail: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  users: [
    {
      type: String,
      ref: "User"
    }
  ]
}, { id: false, collection: 'Feedback' });

const Feedback = mongoose.model("Feedback", FeedbackSchema);

export default Feedback;