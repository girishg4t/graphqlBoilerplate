export default `
  type Feedback {
    _id: String
    userEmail: String!
    rating: String!
    comment: String
    userId: String!
    users: [User!]!
  }
  type Query {
    feedback(userEmail: String!): Feedback
    feedbacks: [Feedback!]!
  }
`;