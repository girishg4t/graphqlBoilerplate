// The Organisation schema.
import Organisation from "../../../Organisation";

export default {
  Query: {
    organisation: (root, args) => {
      return new Promise((resolve, reject) => {
        Organisation.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    organisations: () => {
      return new Promise((resolve, reject) => {
        Organisation.find({})
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  }
};