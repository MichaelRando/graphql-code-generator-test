import {
  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const languageType = new GraphQLEnumType({
  name: "ISOLanguage",
  values: {
    EN: {
      value: "en",
    },
    ES: {
      value: "es",
    },
    RU: {
      value: "ru",
    },
  },
});
const userType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    language: { type: languageType },
  },
});

// Define the Query type
const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: userType,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: { type: GraphQLString },
      },
      resolve: (_, { id }) => {
        return id;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: queryType,
});

export { schema };
export default schema;
