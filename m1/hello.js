var { buildSchema, graphql } = require("graphql")

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)
var source = "{ hello }"
// `rootValue` provides a resolver function
var rootValue = { hello: () => "Hello world!" }
// var rootValue = {
//   hello: () => {
//     return "Hello world!"
//   }
// }

// run the GraphQL query '{ hello }'
graphql({ schema, source, rootValue }).then((response) => {
  console.log(response)
})
// graphql({
//   schema,
//   source: "{ hello }",
//   rootValue
// }).then((response) => {
//   console.log(response)
// })
