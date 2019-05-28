import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'

// not javascript - graphql syntax
// graphql schema
// query is essentially a function, need to define function in schema
const typeDefs = `
type Query {
    hi: String
}
`

// this is javascript
// actual method - server side code
const resolvers = {
    Query: {
        hi() {
            return "Hello Level Up"
        }
    }
}

// in graphiql, just type:
// {
//     hi
// }

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({schema})