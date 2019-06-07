import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo"
import { ApolloLink, from } from "apollo-link" // part of apollo-client-preset package
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

import App from "../../ui/App";

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl("graphql")
})

// ApolloLink is middleware - used for persistent caching, local client-side state
// makes apollo aware that meteor has an account system
const authLink = new ApolloLink((operation, forward) => {
  const token = Accounts._storedLoginToken()
  operation.setContext(() => ({
    headers: {
      'meteor-login-token': token, 
    }
  }))
  return forward(operation)
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  // from is a function that accepts an array
  link: from([authLink, httpLink]),
  cache
})

// apollo provider can be used v much like a redux provider
const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById("app"));
});
