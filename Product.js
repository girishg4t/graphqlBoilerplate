var uuidv4 = require('uuid/v4');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Will add the UUID type to the Mongoose Schema types
require('mongoose-uuid2')(mongoose);
var UUID = mongoose.Types.UUID;

var ProductSchema = Schema({
  _id: { type: UUID, default: uuidv4 },
  name: String
}, { id: false });

ProductSchema.set('toObject', {getters: true});
ProductSchema.set('toJSON', {getters: true});

var Product = mongoose.model('Product', ProductSchema);

export default Product;