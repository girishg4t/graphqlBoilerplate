// The User schema.
import Product from "../../../Product";
const MUUID = require('uuid-mongodb');
export default {
  Query: {
    product: (root, args) => {
      return new Promise((resolve, reject) => {
        const uuid = MUUID.from(args.id);
        Product.findOne({_id : uuid})
        .exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    products: () => {
      return new Promise((resolve, reject) => {
        Product.find({})
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addProduct: (root, { name }) => {
      const newProduct = new Product({ name });

      return new Promise((resolve, reject) => {
        newProduct.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editProduct: (root, { id, name }) => {
      return new Promise((resolve, reject) => {
        Product.findOneAndUpdate({ id }, { $set: { name } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteProduct: (root, args) => {
      return new Promise((resolve, reject) => {
        Product.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};