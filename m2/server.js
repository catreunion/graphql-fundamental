var { buildSchema } = require("graphql")
var { graphqlHTTP } = require("express-graphql")
var express = require("express")

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)
var rootValue = { hello: () => "Hello world!" }
var app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true
  })
)
app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"))
