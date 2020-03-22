import React from 'react'
const { ApolloProvider } = require('@apollo/react-hooks');

import { client } from './src/apollo/client'
import ReduxWrapper from './src/state/ReduxWrapper';

// export const wrapPageElement = ({ element, props }) => {
//     return <div {...props}>{element}</div>
// }

export const wrapRootElement = props => {
    return (
        <ApolloProvider client={client}>
            <ReduxWrapper {...props} />
        </ApolloProvider>
    )
}
