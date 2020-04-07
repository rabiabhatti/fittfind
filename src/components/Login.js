import React, { useState, useEffect, useCallback } from 'react'
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Input } from '.'
import { addUser } from '../state/auth'

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
    const { user } = useSelector(state => ({
        user: state.auth.user
    }), shallowEqual);
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [img, setImg] = useState(null);
    const [facilityCover, setFacilityCover] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const [login] = useMutation(LOGIN_MUTATION);

    const enable = password !== '' && email !== '';

    const handleKeyPress = useCallback( (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleLogin()
        }
    }, [email, password]);

    const handleLogin =  () => {
        if (enable) {
            setLoading(true);
            login({ variables: { input: {identifier: email, password: password}}}).then((res) => {
                if (res.data.login) {
                    setLoading(false);
                    setErrors([]);
                    dispatch(addUser(res.data.login));
                }
            }).catch(error => {
                setErrors(error.networkError.result.errors[0].extensions.data[0].messages);
                setLoading(false);
            })
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    const handleGym = React.useCallback(() => {
        const bodyFormData = new FormData();
        bodyFormData.append('files.avatar', img);
        bodyFormData.append('files.facilities[0].cover_image', facilityCover);
        bodyFormData.append('data', JSON.stringify({
            name: 'Hello',
            about: 'something',
            location: 'test',
            facilities: [{
                name: 'Facility one',
                detail: 'Facility detail',
                price: 14
            }],
            user: user.user,
        }));

        fetch('http://localhost:1337/gyms', {
            method: 'POST',
            body: bodyFormData,
            headers: {
                Authorization: `Bearer ${user.jwt}`,
            }
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [img, user, facilityCover]);

    const handleSubmit = (e) => {
        const formElement = document.querySelector('form');
        e.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:1337/upload');
        request.setRequestHeader('Authorization', `Bearer ${user.jwt}`);

        request.send(new FormData(formElement));
    };

    return (
        <div className='column-start' style={{width: '30%', margin: 'auto', height: '100vh', justifyContent: 'center'}}>
            <input type='file' onChange={event => setImg(event.target.files[0])} />
            <input type='file' onChange={event => setFacilityCover(event.target.files[0])} />
            <button onClick={handleGym}>Upload</button>
            <img src={img} />
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <input type="file" name="files" />*/}
            {/*    <input type="text" name="ref" value="gym" />*/}
            {/*    <input type="text" name="refId" value="4" />*/}
            {/*    <input type="text" name="field" value="avatar" />*/}
            {/*    <input type="submit" value="Submit" />*/}
            {/*</form>*/}
            <Input title='Username / Email' name='email' width={100} onChange={(e) => setEmail(e.target.value)} value={email} />
            <Input type='password' title='Password' name='password' width={100} onChange={(e) => setPassword(e.target.value)} value={password} />
            {!!errors.length &&
            <p className='error-msg'>Email / Username or Password incorrect.</p>
            }
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

