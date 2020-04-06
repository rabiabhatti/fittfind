import React, { useState, useCallback } from 'react'
import { useSelector, shallowEqual } from "react-redux";

import '../../styles/new_gym.css'
import {STRAPI_SERVER_URL} from '../../../common'
import { Wrapper, CustomInput, FileInput } from '../../components'


export default () => {
    const [img, setImg] = useState(null);
    const [facilities, setFacilities] = useState([]);
    const [gymName, setGymName] = useState('');
    const [about, setAbout] = useState('');
    const [city, setCity] = useState('');
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

    const handleAddFacility = () => {
        if (!facilities.length) {
            setFacilities([{
                name: ''
            }])
        } else {
            setFacilities([...facilities, {
                name: ''
            }])
        }
    };
    const handleFacilityInput = (i, e) => {
        const copied = facilities.slice();
        let found = copied[i];
        found.name = e.target.value;
        setFacilities(copied)
    };

    return (
        <Wrapper name='Dashboard' location={{pathname: 'list-yourself'}} gymNav={true}>
            <div className='column-center section-new-gym-container'>
                <div className='column-start section-new-gym-basic-info'>
                    <CustomInput title='Gym Name' type='text' width='100' value={gymName} onChange={e => setGymName(e.target.value)} />
                    <CustomInput title='City' type='text' width='100' value={city} onChange={e => setCity(e.target.value)} />
                    <FileInput onChange={event => setImg(event.target.files[0])} name='gym_cover' value={img}  />
                    <CustomInput title='About' type='text' width='100' value={about} onChange={e =>setAbout(e.target.value)} textArea={true} />
                    {!!facilities.length &&
                    <div>
                        {facilities.map((item, i) => (
                            <div key={i}>
                                <CustomInput title='Name' type='text' width='100' value={facilities[i].name} onChange={e => handleFacilityInput(i, e)} />
                            </div>
                        ))}
                    </div>
                    }
                    <button onClick={handleAddFacility}>
                        Add Facility
                    </button>
                </div>
                {/*<button onClick={handleGym}>Upload</button>*/}
            </div>
        </Wrapper>
    )
};
