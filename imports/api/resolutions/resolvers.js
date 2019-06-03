import Resolutions from './resolutions' // bringing in the collection

// Resolutions.insert({
//     name: "Test Res", 
// })

// const res = Resolutions.find({}).fetch()
// console.log(res)

// this is javascript
// actual method - server side code
export default {
    // Queries are not the only type of resolvers, there are lots of different types
    Query: {
        resolutions() {
            return Resolutions.find({}).fetch()
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
