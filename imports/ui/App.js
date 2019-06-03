import React from "react";
import gql from 'graphql-tag' // allows us to write a graphql query with js
import { graphql } from 'react-apollo'
import ResolutionForm from './ResolutionForm'

const App = ({data}) => {
    // data.loading - super important and useful!
    if (data.loading) return null
    return (
        <div>
            <h1>{data.hi}</h1>
            <ResolutionForm />
            {/* 
            when component first loads data doesn't necessarily come in immediately 
            how do we prevent react from trying to load graphql stuff before data is available?
            can't do default props
            what about data.loading?
            */}

            <ul>
            {data.resolutions.map(resolution => {
                <li key={resolution._id}>
                    {resolution.name}
                </li>
            })}
            </ul>
        </div>
    )
}

const hiQuery = gql`
{
    hi
    resolutions {
        _id
        name
    }
}
`

export default graphql(
    hiQuery
)(App);
