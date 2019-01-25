export default `
  type Organisation {
    id: String!
    mainContact: String
    mainContactNumber: String
    identifier: String
  }
  type Query {
    organisation(id: String!): Organisation
    organisations: [Organisation]
  }
`;