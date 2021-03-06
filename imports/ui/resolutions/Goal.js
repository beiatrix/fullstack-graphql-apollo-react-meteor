import React, {Component} from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

const toggleGoal = gql` # this toggleGoal just defines variable you're storing gql in
    mutation toggleGoal($id: String!) { # mutation name
        toggleGoal(_id: $id) { # need to have actual name the same as our mutation
            _id
        }
    }
`

class Goal extends Component {
    toggleGoal = () => {
        this.props.toggleGoal({
            variables: {
                id: this.props.goal._id
            }
        })
    }

    render() {
        const {goal} = this.props
        return (
            <li>
                <input type="checkbox" onChange={this.toggleGoal} checked={goal.completed} /> 
                <span style={{
                    textDecoration: goal.completed ? "line-through" : "none"
                }}>
                    {this.props.goal.name}
                </span>
            </li>
        )
    }
}

export default graphql(toggleGoal, {
    name: "createGoal", 
    options: {
        refetchQueries: ["Resolutions"] 
        // everytime we add a goal/resolution it hits our db and refetches everything again
        // issa quick fix. not necessarily performant
    }
})(Goal)