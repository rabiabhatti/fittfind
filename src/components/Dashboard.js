import React, { useState, useCallback } from 'react'
import { useSelector, shallowEqual } from "react-redux";

import { Wrapper } from '.'
import {STRAPI_SERVER_URL} from '../../common'


const Dashboard = () => {
    const [img, setImg] = useState(null);
    const { user } = useSelector(state => ({
        user: state.auth.user
    }), shallowEqual);

    const handleGym = useCallback(() => {
        const data = {
            refId: 1,
            ref: 'gym',
            field: 'files.gym-facility[0].cover_image',
            files: img,
        };

        const form_data = new FormData();
        for ( let key in data ) {
            form_data.append(key, data[key]);
        }

        fetch(`${STRAPI_SERVER_URL}/upload`, {
            method: 'POST',
            body: form_data,
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
    }, [user, img]);


    return (
        <Wrapper name='Dashboard' location={{pathname: 'list-yourself'}} gymNav={true}>
            <input type='file' onChange={event => setImg(event.target.files[0])} />
            <button onClick={handleGym}>Upload</button>
        </Wrapper>
    )
};

export { Dashboard }
