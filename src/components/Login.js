import React, { useState, useEffect, useCallback } from 'react'
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

const Login = () => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [login] = useMutation(LOGIN_MUTATION);
    const enable = password !== '' && email !== '';

    const handleKeyPress = useCallback( (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleLogin()
        }
    }, [email, password]);

    const handleLogin =  () => {

        setLoading(true);
        login({ variables: { input: {identifier: email, password: password}}}).then((res) => {
            if (res.data.login) {
                setLoading(false);
                console.log(res.data.login, loading)
            }
        }).catch(error => {
            console.log(error);
            setLoading(false);
        })
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div className='column-center' style={{width: '30%', margin: 'auto', height: '100vh', justifyContent: 'center'}}>
            <BasketInput className='section-basket-address-input' title='Username / Email' name='email' width={100} onChange={(e) => setEmail(e.target.value)} value={email} />
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

export { Login }
