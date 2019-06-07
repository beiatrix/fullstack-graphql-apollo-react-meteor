import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
import ResolutionsResolvers from '../../api/resolutions/resolvers'

import UsersSchema from '../../api/users/User.graphql'
import UsersResolvers from '../../api/users/resolvers'

// in a real project you're gonna have a lot of schemas that will be combining
// keep creating schemas, importing them, and adding them to typeDefs array below

// returning an array of resolutions

// not javascript - graphql syntax
// graphql schema
// query is essentially a function, need to define function in schema
const typeDefs = [ 
    // order of these doesn't matter apparently, maybe works either way
    ResolutionsSchema,
    UsersSchema
]

// lodash merge 2 objects
const resolvers = merge(
    ResolutionsResolvers,
    UsersResolvers
)
console.log(resolvers)

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({schema})