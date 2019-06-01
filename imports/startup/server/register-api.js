import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'

const testSchema = `
type Query {
    hi: String
}
`

// not javascript - graphql syntax
// graphql schema
// query is essentially a function, need to define function in schema
const typeDefs = [
    testSchema,
    ResolutionsSchema
]

// in a real project you're gonna have a lot of schemas that will be combining

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