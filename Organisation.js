import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const OrganisationSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  mainContact: {
    type: String,
    required: false
  },
  mainContactNumber: {
    type: String,
    required: false
  },
  identifier: {
    type: String,
    required: false
  }
},  { collection: 'Organisation' });

const Organisation = mongoose.model("Organisation", OrganisationSchema);

export default Organisation;