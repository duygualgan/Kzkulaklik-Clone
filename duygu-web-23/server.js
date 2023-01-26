const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const myGraphQLSchema = require('./schema')
const Cors = require('cors')

const app = express()

app.use(Cors())

app.use('/graphql', graphqlHTTP({
  schema: myGraphQLSchema,
  graphiql: true
}))

app.listen(5050, () => {
  console.log('server 5050. portta çalışıyor')
})
