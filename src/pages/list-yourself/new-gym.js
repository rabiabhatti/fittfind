import React, { useState, useCallback, Fragment } from 'react'
import { useSelector, shallowEqual } from "react-redux";

import '../../styles/new_gym.css'
import {STRAPI_SERVER_URL} from '../../../common'
import { Wrapper, Input, FileInput, CheckBox, PlusIcon, DeleteIcon } from '../../components'

const allAmenities = ['weight equipments', 'cardiovascular equipments', 'special machines', 'changing rooms', 'showers', 'lockers', 'healthy snacks', 'air condition', 'satellite tv'];

export default () => {
    const [img, setImg] = useState(null);
    const [facilities, setFacilities] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [gymName, setGymName] = useState('');
    const [about, setAbout] = useState('');
    const [city, setCity] = useState('');
    const [currentFacility, setCurrentFacility] = useState(0);
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

    const handleAddFacility = useCallback(() => {
        if (!facilities.length) {
            setFacilities([{
                name: '',
                price: '',
                detail: '',
                cover_image: null,
            }])
        } else {
            setFacilities([...facilities, {
                name: '',
                price: '',
                detail: '',
                cover_image: null,
            }]);
            setCurrentFacility(facilities.length)
        }
    }, [facilities]);

    const handleFacilityInput = (i, e) => {
        const copied = facilities.slice();
        const found = copied[i];
        found[e.target.name] = e.target.name === 'cover_image' ? e.target.files[0] : e.target.value;
        setFacilities(copied)
    };

    const handleRemoveFacility = useCallback((i) => {
        const copied = facilities.slice();
        const found = facilities.indexOf(copied[i]);
        if (found !== -1) {
            copied.splice(found, 1);
        }
        setFacilities(copied)
    }, [facilities]);

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

    let disableNewFacility;
    if (facilities.length) {
        disableNewFacility = facilities[facilities.length -1].name === '' || facilities[facilities.length -1].price === '' || facilities[facilities.length -1].detail === '' || facilities[facilities.length -1].cover_image === null;
    }

    return (
        <Wrapper name='Dashboard' location={{pathname: 'list-yourself'}} gymNav={true}>
            <div className='column-center section-new-gym-container'>
                <div className='column-start section-new-gym-basic-info'>
                    <Input title='Gym Name' name='gymName' width='100' value={gymName} onChange={e => setGymName(e.target.value)} />
                    <Input title='City' width='100' name='city' value={city} onChange={e => setCity(e.target.value)} />
                    <FileInput onChange={event => setImg(event.target.files[0])} name='gym_cover' value={img} title='upload image' />
                    <Input title='About' width='100' name='about' value={about} onChange={e =>setAbout(e.target.value)} textArea={{rows: 10, cols: 30}} />
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
                    <div className='column-center section-new-gym-multi-entries'>
                        {!facilities.length ?
                            <p className='section-new-gym-multi-entries-empty'>No entry yet. Click on the button below to add one.</p>
                            :
                            <div className='section-new-gym-single-entry'>
                                {facilities.map((item, i) => (
                                    <div key={i} className={`${currentFacility === i ? 'section-new-gym-opened-entry row-center space-between ' : 'section-new-gym-closed-entry'}`}>
                                       {currentFacility === i ?
                                           <Fragment>
                                               <Input title='Name' name='name' width='49' value={facilities[i].name} onChange={e => handleFacilityInput(i, e)} />
                                               <Input title='Price' name='price' width='49' value={facilities[i].price} onChange={e => handleFacilityInput(i, e)} />
                                               <FileInput onChange={e => handleFacilityInput(i, e)} name='cover_image' value={facilities[i].cover_image} title='upload image' />
                                               <Input title='Detail' name='detail' width='100' value={facilities[i].detail} onChange={e => handleFacilityInput(i, e)}  textArea={{rows: 10, cols: 30}} />
                                           </Fragment>
                                        :
                                           <div className='row-center space-between'>
                                               <button className='section-new-gym-closed-entry-title' onClick={() => setCurrentFacility(i)}>
                                                   {item.name || 'Enter facility credentials'}
                                               </button>
                                               <button className='section-new-gym-closed-entry-delete' onClick={() => handleRemoveFacility(i)}>
                                                   <DeleteIcon color='#333' width={15} height={15} />
                                               </button>
                                           </div>
                                       }
                                    </div>
                                ))}
                            </div>
                        }
                        <button className='row-center section-new-gym-new-entry-btn' onClick={handleAddFacility} disabled={disableNewFacility}>
                            <PlusIcon color='#025696' width={15} height={15} />
                            <p>Add new facility</p>
                        </button>
                    </div>
                </div>
                {/*<button onClick={handleGym}>Upload</button>*/}
            </div>
        </Wrapper>
    )
};
