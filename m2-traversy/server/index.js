require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const connectDB = require("./config/db.js")
const cors = require("cors")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema.js")
const colors = require("colors")

connectDB()
app.use(cors())
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
  })
)
app.listen(port, console.log(`Server running on port ${port}`))
