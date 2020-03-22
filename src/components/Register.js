import React, { useState, useEffect, useCallback } from 'react'
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';

import { BasketInput } from './.'

const REGISTER_MUTATION = gql`
 mutation Register($input: UserInput!) {
    register (input: $input) {
        jwt
        user {
          username
          email
          id
        }
      }
  }
  
`;

const Register = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [register] = useMutation(REGISTER_MUTATION);
    const enable = password !== '' && email !== '' && username !== '';

    const handleKeyPress = useCallback( (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleRegister()
        }
    }, [email, password, username]);

    const handleRegister =  () => {
        setLoading(true);
        register({ variables: { input: {email, password, username}}}).then((res) => {
            console.log('res', res)
            if (res.data.register) {
                setLoading(false);
                console.log(res.data.register, loading)
            }
        }).catch(error => {
            console.log('error', error.message);
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
            <BasketInput className='section-basket-address-input' title='Username' name='username' width={100} onChange={(e) => setUsername(e.target.value)} value={username} />
            <BasketInput className='section-basket-address-input' title='Email' name='email' width={100} onChange={(e) => setEmail(e.target.value)} value={email} />
            <BasketInput type='password' className='section-basket-address-input' title='Password' name='password' width={100} onChange={(e) => setPassword(e.target.value)} value={password} />
            <button
                disabled={!enable}
                onClick={handleRegister}
                className='section-popup-btn'
                style={{width: '100%', fontSize: '0.85rem'}}
            >
                Create Account
            </button>
        </div>
    )
};

export { Register }