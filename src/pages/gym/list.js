import React from 'react'
import { Link } from 'gatsby'
import Select from 'react-select';

import '../../styles/gym-list.css'
import { Wrapper, Hero } from '../../components'
import horizontal_line from "../../images/horizontal_line.png";
import women_banner from "../../images/women_banner.jpg";

const facilitiesOptions = [
    { value: 'ALL', label: 'ALL' },
    { value: 'OPTION 1', label: 'OPTION 1' },
    { value: 'OPTION 2', label: 'OPTION 2' },
];
const amenitiesOptions = [
    { value: 'ALL', label: 'ALL' },
    { value: 'OPTION 1', label: 'OPTION 1' },
    { value: 'OPTION 2', label: 'OPTION 2' },
];

export default class GymList extends React.Component{
    state = {
        location: 'london',
        facilityOption: facilitiesOptions[0].value.toUpperCase(),
        amenityOption: amenitiesOptions[0].value.toUpperCase(),
    };

    handleFacilityChange = input => {
        this.setState(
            { facilityOption: input.value.toUpperCase()}
        );
    };

    handleAmenityChange = input => {
        this.setState(
            { amenityOption: input.value.toUpperCase()}
        );
    };

    render() {
        const { amenityOption, location, facilityOption } = this.state;
        return (
            <Wrapper name='List Yourself'>
                <Hero>
                    <div className='column-start section-gym-list'>
                        <div className='section-gym-list-banner'>
                            <h1>Flexible gym & studio access:#find&release</h1>
                            <h2>Safely access over <span>1000 gyms & studios</span></h2>
                        </div>
                        <div className='space-between section-gym-list-filters-container'>
                            <div className='section-gym-list-filters'>
                                <div className='select-container'>
                                    <p>
                                        <img src={horizontal_line} alt='horizontal_line' />
                                        LOCATION:
                                    </p>
                                    <div className='section-gym-list-filters-location'>{location}</div>
                                </div>
                                <div className='select-container'>
                                    <p><img src={horizontal_line} alt='horizontal_line' />FACILITIES:</p>
                                    <Select
                                        isDisabled={false}
                                        value={facilityOption}
                                        options={facilitiesOptions}
                                        placeholder={facilityOption}
                                        classNamePrefix="react-select"
                                        className='react-select-container'
                                        onChange={this.handleFacilityChange}
                                    />
                                </div>
                                <div className='select-container'>
                                    <p><img src={horizontal_line} alt='horizontal_line' />AMENITIES:</p>
                                    <Select
                                        isDisabled={false}
                                        value={amenityOption}
                                        options={amenitiesOptions}
                                        placeholder={amenityOption}
                                        classNamePrefix="react-select"
                                        className='react-select-container'
                                        onChange={this.handleAmenityChange}
                                    />
                                </div>
                            </div>
                            <Link to='/gym' className='section-gym-list-map-btn'>
                                Show map
                            </Link>
                        </div>
                    </div>
                </Hero>
            </Wrapper>
        )
    }
}
