export default {
    // Queries are not the only type of resolvers, there are lots of different types
    Query: {
        // params: obj, args, context
        // destructured userId from context
        user(obj, args, { user }) {
            return user || {}
        }
    },
    User: {
        // didn't like shape of data that came out of database, so remapped to a new property 
        email: user => user.emails[0].address
    }
}