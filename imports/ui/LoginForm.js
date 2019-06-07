import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'

console.log(Accounts) // globally available 

// login system is completely unaware of graphql at this point.
// next we make apollo aware of meteor
export default class LoginForm extends Component {
    login = event => {
        event.preventDefault() // prevent page from autorefreshing on submit
        // a helpful meteor method
        Meteor.loginWithPassword(this.email.value, this.password.value,
        error => {
            console.log(error)
        })
    }

    render() {
        return (
            <form onSubmit={this.login}>
                <input 
                    type="email"
                    ref={input => this.email = input}
                />
                <input 
                    type="password"
                    ref={input => this.password = input}
                />
                <button type="submit">Login User</button>
            </form>
        )
    }
}