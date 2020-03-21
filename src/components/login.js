import React, { useState, useEffect, useRef, useCallback } from 'react'
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

import { BasketInput } from './.'

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

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [login, { data }] = useMutation(LOGIN_MUTATION);
    const enable = password !== '' && email !== '';
    const didMountRef = useRef(false);

    const handleKeyPress = useCallback( (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            handleLogin()
        }
    }, [email, password]);

    const handleLogin = async () => {
        setLoading(true);
        await login({ variables: { input: {identifier: email, password: password}}})
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    useEffect(() => {
        if (didMountRef.current) {
            if (data.login) {
                setLoading(false);
                console.log(data.login, loading)
            }
        } else didMountRef.current = true
    }, [data]);


    return (
        <div className='column-center' style={{width: '30%', margin: 'auto', height: '100vh', justifyContent: 'center'}}>
            <BasketInput className='section-basket-address-input' title='Email' name='email' width={100} onChange={(e) => setEmail(e.target.value)} value={email} />
            <BasketInput type='password' className='section-basket-address-input' title='Password' name='password' width={100} onChange={(e) => setPassword(e.target.value)} value={password} />
            <button
                disabled={!enable}
                onClick={handleLogin}
                className='section-popup-btn'
                style={{width: '100%', fontSize: '0.85rem'}}
            >
                Login
            </button>
        </div>
    )
};
