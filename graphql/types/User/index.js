export default `
  type User {
    id: String
    firstName: String!
    lastName: String!
    email: String
  }
  type Query {
    user(firstName: String!): User
    users: [User]
  }
  type Mutation {
    addUser(id: String!, firstName: String!, lastName: String!, email: String): User
    editUser(id: String, firstName: String!, lastName: String!, email: String): User
    deleteUser(id: String, firstName: String!, lastName: String!, email: String): User
  }
`;