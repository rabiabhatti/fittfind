import React, { useState, useCallback } from 'react'
import { useSelector, shallowEqual } from "react-redux";

import '../../styles/new_gym.css'
import {STRAPI_SERVER_URL} from '../../../common'
import { Wrapper, Input, FileInput, CheckBox, PlusIcon } from '../../components'

const allAmenities = ['weight equipments', 'cardiovascular equipments', 'special machines', 'changing rooms', 'showers', 'lockers', 'healthy snacks', 'air condition', 'satellite tv'];

export default () => {
    const [img, setImg] = useState(null);
    const [facilities, setFacilities] = useState([]);
    const [amenities, setAmenities] = useState([]);
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

    const handleAmenityInput = useCallback((e) => {
        const copy = amenities.slice();
        const index = amenities.indexOf(e.target.value);
        if (index === -1) {
            copy.push(e.target.value);

        } else {
            copy.splice(index, 1);
        }
        setAmenities(copy)
    }, [amenities]);

    const handleAllAmenities = useCallback(()=> {
        if (amenities.length < allAmenities.length) {
            setAmenities(allAmenities);
        } else setAmenities([])
    }, [amenities]);

    return (
        <Wrapper name='Dashboard' location={{pathname: 'list-yourself'}} gymNav={true}>
            <div className='column-center section-new-gym-container'>
                <div className='column-start section-new-gym-basic-info'>
                    <Input title='Gym Name' type='text' width='100' value={gymName} onChange={e => setGymName(e.target.value)} />
                    <Input title='City' type='text' width='100' value={city} onChange={e => setCity(e.target.value)} />
                    <FileInput onChange={event => setImg(event.target.files[0])} name='gym_cover' value={img} title='upload image' />
                    <Input title='About' type='text' width='100' value={about} onChange={e =>setAbout(e.target.value)} textArea={{rows: 10, cols: 30}} />
                </div>
                <div className='section-new-gym-amenities'>
                    <div className='row-center space-between'>
                        <p>Amenities({amenities.length})</p>
                        <CheckBox name='select all' value='select all' onChange={handleAllAmenities} width={10} checked={amenities.length === allAmenities.length} />
                    </div>
                    <div className='section-new-gym-amenities-options row-center'>
                        <CheckBox name='weight_equipments' value='weight equipments' onChange={handleAmenityInput} width={30} checked={amenities.includes('weight equipments')} />
                        <CheckBox name='cardiovascular_equipments' value='cardiovascular equipments' onChange={handleAmenityInput} width={30} checked={amenities.includes('cardiovascular equipments')} />
                        <CheckBox name='special_machines' value='special machines' onChange={handleAmenityInput} width={30} checked={amenities.includes('special machines')} />
                        <CheckBox name='changing_rooms' value='changing rooms' onChange={handleAmenityInput} width={30} checked={amenities.includes('changing rooms')} />
                        <CheckBox name='showers' value='showers' onChange={handleAmenityInput} width={30} checked={amenities.includes('showers')} />
                        <CheckBox name='lockers' value='lockers' onChange={handleAmenityInput} width={30} checked={amenities.includes('lockers')} />
                        <CheckBox name='healthy_snacks' value='healthy snacks' onChange={handleAmenityInput} width={30} checked={amenities.includes('healthy snacks')} />
                        <CheckBox name='air_condition' value='air condition' onChange={handleAmenityInput} width={30} checked={amenities.includes('air condition')} />
                        <CheckBox name='satellite_tv' value='satellite tv' onChange={handleAmenityInput} width={30} checked={amenities.includes('satellite tv')} />
                    </div>
                </div>
                <div className='section-new-gym-facilities'>
                    <p>Facilities({facilities.length})</p>
                    <div>
                        <PlusIcon color={'red'} width={20} height={20} />
                    </div>
                </div>
                {!!facilities.length &&
                <div>
                    {facilities.map((item, i) => (
                        <div key={i}>
                            <Input title='Name' type='text' width='100' value={facilities[i].name} onChange={e => handleFacilityInput(i, e)} />
                        </div>
                    ))}
                </div>
                }
                <button onClick={handleAddFacility}>
                    Add Facility
                </button>
                {/*<button onClick={handleGym}>Upload</button>*/}
            </div>
        </Wrapper>
    )
};
