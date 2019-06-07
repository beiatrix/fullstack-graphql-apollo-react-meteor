import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const createGoal = gql`
    mutation createGoal($name: String!, $resolutionId: String!) {
        createGoal(name: $name, resolutionId: $resolutionId) {
            _id
        }
    }
`

class GoalForm extends Component {
    submitForm = () => {
        console.log(this.name.value)
        this.props.createGoal({
            variables: {
                name: this.name.value,
                resolutionId: this.props.resolutionId
            }
        }).then(() => {
            this.name.value = ""
        })
        .catch(error => {
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

export default graphql(createGoal, {
    name: "createGoal", 
    options: {
        refetchQueries: ["Resolutions"] 
        // everytime we add a goal/resolution it hits our db and refetches everything again
        // issa quick fix. not necessarily performant
    }
})(GoalForm)