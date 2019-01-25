import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Organisation from "./Organisation/";
import Product from "./Product/";
import Feedback from "./Feedback/";

const resolvers = [User, Organisation, Product, Feedback];

export default mergeResolvers(resolvers);