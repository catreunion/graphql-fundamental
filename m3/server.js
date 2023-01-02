import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { books } from "./books.js"

// a schema is a collection of object type definitions (hence "typeDefs")
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  # lists all the queries that clients can execute, along with the return type for each
  type Query {
  # return an array of zero or more Books
    books: [Book]
  }
`

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

// pass the ApolloServer instance to the `startStandaloneServer` function
//  1. create an Express app
//  2. installs your ApolloServer instance as middleware
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(`🚀  Server ready at: ${url}`)
