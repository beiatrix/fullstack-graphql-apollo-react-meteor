import React from "react";
import gql from 'graphql-tag' // allows us to write a graphql query with js
import { graphql } from 'react-apollo'
import ResolutionForm from './ResolutionForm'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import { withApollo } from "react-apollo"

// this component is much less aware of graphql. simply looking for a loading state & resolution
const App = ({ loading, resolutions, client }) => {
    // data.loading - super important and useful!
    if (loading) return null
    return (
        <div>
            {/* deleted refetch prop that was here. shouldn't have to refetch manually */}
            <button 
                onClick={() => { 
                    Meteor.logout()
                    client.resetStore() // resets store whenever someone logs in or out
            }}>Logout</button>
            <RegisterForm client={client} />
            <LoginForm client={client} />
            <ResolutionForm />
            {/* 
            when component first loads data doesn't necessarily come in immediately 
            how do we prevent react from trying to load graphql stuff before data is available?
            can't do default props
            what about data.loading?
            */}
            <ul>
            {resolutions.map(resolution => {
                <li key={resolution._id}>
                    {resolution.name}
                </li>
            })}
            </ul>
        </div>
    )
}

// this is where refetch is coming from. refetch will refetch this query
// hiQuery is just a variable assignment. not actually the name of the query
const hiQuery = gql`
# query itself begins with this bracket
# define name here
query Resolutions { 
    hi
    resolutions {
        _id
        name
    }
}
`

export default graphql(
    resolutionsQuery, 
    // passing in options object
    {
        // returning an object, which is what our props are
        props: ({data}) => ({...data})
        // the above line is equivalent to the below:
        //     {
        //         resolutions: data.resolutions
        //     }
        // )
    }
)(withApollo(App));
