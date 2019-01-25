// The User schema.
import Feedback from "../../../Feedback";
import User from "../../../User";

export default {
  Query: {
    feedback: (root, args) => {
      return new Promise((resolve, reject) => {
        Feedback.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    feedbacks: () => {
      return new Promise((resolve, reject) => {
        Feedback.find({})
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Feedback: {
    users: ({ userEmail }, args, context, info) => {
      return new Promise((resolve, reject) => {
        User.find({ email: userEmail }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
  }
};