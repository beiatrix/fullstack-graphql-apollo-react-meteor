export default {
    // Queries are not the only type of resolvers, there are lots of different types
    Query: {
        // params: obj, args, context
        // destructured userId from context
        user(obj, args, { user }) {
            return user || {}
        }
    }
}