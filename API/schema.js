const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Profile {
    id: ID
    name: String
    surname: String
    occupation: ENUM
    age: Int
    email: String
    cell: String
    gender: String
    questiions: [Question]
    answers: [Answer]
    address: String
    userRole: Enum
    questionCategory: ENUM
    bio: String

  }

  input ProfileInput {
    name: String!
    surname: String!
    occupation: ENUM!
    age: Int!
    email: String!
    cell: String!
    gender: String!
    questiionId: ID
    answerId: ID
    address: String!
    userRole: Enum!
    questionCategory: ENUM
    bio: String
  }

    type Query {
    profiles: [Profile]
    profile(id:ID): Profile
    }

    type Mutation {
    createProfile(input: ProfileInput): Profile
    }
`
