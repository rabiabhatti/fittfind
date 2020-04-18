import React, { useState, useEffect, useCallback } from 'react'
import gql from "graphql-tag";
import { useDispatch } from "react-redux";
import { useMutation } from '@apollo/react-hooks';

import { Input } from '.'
import { request } from "../api/ecwid";
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
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [fist_name, setFistName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const [register] = useMutation(REGISTER_MUTATION);

    const enable = password !== '' && email !== '' && fist_name !== '' && last_name !== '';

    const handleKeyPress = useCallback( (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleRegister()
        }
    }, [email, password, fist_name, last_name]);

    const handleRegister = useCallback(() => {
        if (enable) {
            if (password.length < 8) {
                setErrors([{id: 'password', message: 'Password is too short.'}]);
                return null
            } else {
                setLoading(true);
                request('POST', {email, password}, 'customers').then(res => {
                    const ecwid_id = JSON.parse(res);
                    if (ecwid_id.id) {
                        register({ variables: { input: {email, username: email, password, first_name: fist_name, last_name: last_name, ecwid_id: ecwid_id.id.toString()}}}).then((res) => {
                            if (res.data.register) {
                                const user = res.data.register.user;
                                setLoading(false);
                                setErrors([]);
                                user.ecwid_id = ecwid_id.id;
                                user.first_name = fist_name;
                                user.last_name = last_name;
                                dispatch(addUser({jwt: res.data.register.jwt, user}));
                            }
                        }).catch(error => {
                            setErrors(error.networkError.result.errors[0].extensions.data[0].messages);
                            setLoading(false);
                        })
                    } else {
                        setErrors([{id: 'email', message: 'Email already taken.'}]);
                    }
                });
            }
        }
    }, [fist_name, last_name, email, password]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div className='column-start' style={{width: '30%', margin: 'auto', height: '100vh', justifyContent: 'center'}}>
            <Input title='First Name' name='firstName' width={100} onChange={(e) => setFistName(e.target.value)} value={fist_name} errors={errors} />
            <Input title='Last Name' name='lastName' width={100} onChange={(e) => setLastName(e.target.value)} value={last_name} errors={errors} />
            <Input title='Email' name='email' width={100} onChange={(e) => setEmail(e.target.value)} value={email} errors={errors} />
            <Input type='password' title='Password' name='password' width={100} onChange={(e) => setPassword(e.target.value)} value={password} errors={errors} />
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
