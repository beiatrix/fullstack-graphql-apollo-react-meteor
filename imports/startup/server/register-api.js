import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'

// in a real project you're gonna have a lot of schemas that will be combining
// keep creating schemas, importing them, and adding them to typeDefs array below

const testSchema = `
type Query {
    hi: String
    resolutions: [Resolution] 
}
`
// returning an array of resolutions

// not javascript - graphql syntax
// graphql schema
// query is essentially a function, need to define function in schema
const typeDefs = [
    testSchema,
    ResolutionsSchema
]


// this is javascript
// actual method - server side code
const resolvers = {
    Query: {
        hi() {
            return "Hello Level Up"
        },
        resolutions() {
            return [
                {
                    _id: "asdfasdfasdf",
                    name: "Get stuff done!"
                },
                {
                    _id: "fffff",
                    name: "Lose some weight!"
                }
            ]
        }
    }
}

// in /graphiql, just type:

// {
//     hi
// }

// {
//     resolutions {
//           _id
//       name
//     }
//   }

// only get what we ask for
// not hitting an api and getting a bunch of data, only saying hey give me this specific data

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({schema})