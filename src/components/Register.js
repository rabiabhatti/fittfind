import React, { useState, useEffect, useCallback } from 'react'
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { CustomInput } from './.'
import { addUser } from '../state/auth'

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
    const { user } = useSelector(state => ({
        user: state.auth.user
    }), shallowEqual);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const [register] = useMutation(REGISTER_MUTATION);

    const enable = password !== '' && email !== '' && username !== '';

    const handleKeyPress = useCallback( (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleRegister()
        }
    }, [email, password, username]);

    const handleRegister =  () => {
        if (enable) {
            if (password.length < 8) {
                setErrors([{id: 'password', message: 'Password is too short.'}]);
                return null
            } else {
                setLoading(true);
                register({ variables: { input: {email, password, username}}}).then((res) => {
                    if (res.data.register) {
                        setLoading(false);
                        setErrors([]);
                        dispatch(addUser(res.data.login));
                    }
                }).catch(error => {
                    setErrors(error.networkError.result.errors[0].extensions.data[0].messages);
                    setLoading(false);
                })
            }
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div className='column-start' style={{width: '30%', margin: 'auto', height: '100vh', justifyContent: 'center'}}>
            <CustomInput className='section-basket-address-input' title='Username' name='username' width={100} onChange={(e) => setUsername(e.target.value)} value={username} errors={errors} />
            <CustomInput className='section-basket-address-input' title='Email' name='email' width={100} onChange={(e) => setEmail(e.target.value)} value={email} errors={errors} />
            <CustomInput type='password' className='section-basket-address-input' title='Password' name='password' width={100} onChange={(e) => setPassword(e.target.value)} value={password} errors={errors} />
            {password.length < 8 &&
                <p className='input-additional-info'>Password must contains at least 8 or more characters.</p>
            }
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
