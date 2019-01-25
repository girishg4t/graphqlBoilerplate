export default `
  type Product {
    id: String
    name: String!
  }
  type Query {
    product(id: String!): Product
    products: [Product]
  }
  type Mutation {
    addProduct(id: String, name: String!): Product
    editProduct(id: String, name: String!): Product
    deleteProduct(id: String, name: String!): Product
  }
`;