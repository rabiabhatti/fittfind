import React, {Fragment} from "react"
import { ApolloProvider } from '@apollo/react-hooks'

import "./src/styles/global.css"

import { client } from './src/apollo/client'
// import ApolloWrapper from './src/apollo/ApolloWrapper';
import ReduxWrapper from './src/state/ReduxWrapper';

export const wrapRootElement = props => {
    return (
        <ApolloProvider client={client}>
            <ReduxWrapper {...props} />
        </ApolloProvider>
    )
};

export const wrapPageElement = ({ element, props }) => {
    return <div {...props}>{element}</div>
}
