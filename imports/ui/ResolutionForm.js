import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

// use the createResolution mutation to return id
const createResolution = gql`
    mutation createResolution($name: String!) {
        createResolution(name: $name) {
            _id
        }
    }
`
// benefits - we get type checking on both client and server side

class ResolutionForm extends Component {
    submitForm = () => {
        console.log(this.name.value)
        this.props.createResolution({
            variables: {
                name: this.name.value
            }
        // our mutation returns a promise
        // we want to refetch our query
        // but apollo shouldn't have to refetch our query... should be aware of our data
        // deleted the .then statement that was here
        // need to specify the query we want to be refetched within our mutation
        }).catch(error => {
            console.log(error)
        })
    }

    render () {
        return (
            <div>
                <input type="text" ref={input => (this.name = input)} />
                <button onClick={this.submitForm}>Submit</button>
            </div>
        )
    }
}

export default graphql(createResolution, {
    // name of mutation
    name: "createResolution", 
    options: {
        // passing in an array of strings of the query names we want to refetch
        refetchQueries: [ 
            "Resolutions" // this is passed into graphql in the App file
        ]
    }
})(ResolutionForm)