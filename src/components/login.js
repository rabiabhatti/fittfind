import React, { useState } from 'react'
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

import { BasketInput } from './.'
import {useEventListener} from '../helper'

const LOGIN_MUTATION = gql`
 mutation Login($input: UsersPermissionsLoginInput!) {
    login (input: $input) {
        jwt
        user {
          username
          email
          id
        }
      }
  }
  
`;

export default () => {
    // const handleKeyPress = (e) => {
    //     console.log(e)
    //     // if (e.key === 'Enter') {
    //     // }
    // };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { data }] = useMutation(LOGIN_MUTATION);
    const enable = password !== '' && email !== '';

    // useEventListener('keydown', handleKeyPress());

    console.log(data && data.login);



    return (
        <div className='column-center' style={{width: '30%', margin: 'auto', height: '100vh', justifyContent: 'center'}}>
            <BasketInput className='section-basket-address-input' title='Email' name='email' width={100} onChange={(e) => setEmail(e.target.value)} value={email} />
            <BasketInput type='password' className='section-basket-address-input' title='Password' name='password' width={100} onChange={(e) => setPassword(e.target.value)} value={password} />
            <button
                disabled={!enable}
                className='section-popup-btn'
                style={{width: '100%', fontSize: '0.85rem'}}
                onClick={() => login({ variables: { input: {identifier: email, password: password } } })}
            >
                Sign In
            </button>
        </div>
    )
};
