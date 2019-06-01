// this is javascript
// actual method - server side code
export default {
    // Queries are not the only type of resolvers, there are lots of different types
    Query: {
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
