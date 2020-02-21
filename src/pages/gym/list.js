import React from 'react'
import { Link } from 'gatsby'
import Select from 'react-select';

import '../../styles/gym-list.css'
import { Wrapper, Hero } from '../../components'
import forwardIcon from "../../images/forward-icon.png";
import women_banner from "../../images/women_banner.jpg";
import backward_icon from '../../images/backward-icon.png';
import horizontal_line from "../../images/horizontal_line.png";

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

const gym_list = [
    {
        number: '999',
        name: 'Hertfordshire sports village',
        price: '20',
        desc: 'We want to make you sweat! Visit Hertfordshire Elite Sports Village',
        city: 'Hertfordshire',
        featured: true,
    },{
        number: '1250',
        name: 'Moreno boxing',
        price: '50',
        desc: 'Learn the art of boxing the way it is meant to be ...',
        city: 'london',
        featured: true,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    },{
        number: '999',
        name: 'Fit/day',
        price: '9',
        desc: 'Beautiful Hollywood Hills home with pool and city views',
        city: 'paris',
        featured: false,
    }
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

    handlePrevNext = (type) => {
        console.log('clicked')
        // const currentPage = window.location.href.slice(window.location.href.length - 1);
        // window.location.href = type === 'next' ? `/gym/list?page=${parseInt(currentPage) + 1}` : `/gym/list?page=${parseInt(currentPage)-1}`;
    };

    handlePageClick = (p) => {
        console.log('clicked')
        // window.location.href = `/gym/list?page=${p+1}`
    };

    render() {
        const { amenityOption, location, facilityOption } = this.state;
        const pages = [0, 1, 2, 3, 4, 5, 6, 7];
        let currentPage = 1;
        // if (typeof window !== undefined) {
        //     currentPage = window.location.href.slice(window.location.href.length - 1);
        // }

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
                <div className='section-gym-all-list row-center'>
                    {gym_list.map((item, i) =>(
                        <div className='section-single-gym-container' key={i}>
                            <img src={women_banner} alt='women_banner' />
                            <Link className='section-single-gym-desc' to='/'>
                                <div className='section-single-gym-desc-top'>
                                    <h4>{item.number}</h4>
                                    <h5>{item.name}</h5>
                                    <p>${item.price}</p>
                                </div>
                                <p className='section-single-gym-desc-middle'>{item.desc}</p>
                                <div className='section-single-gym-desc-bottom'>
                                    <h4>{item.city}</h4>
                                    {item.featured && <h4>Featured</h4>}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='section-gym-list-pages'>
                    <button disabled={currentPage === 1} onClick={() => this.handlePrevNext('prev')}>
                        <img src={backward_icon} alt='backward_icon' />
                        Previous
                    </button>
                    {pages.map(p => (
                        <button
                            key={p}
                            className={currentPage === p ? `section-gym-list-current-page` : ''}
                            onClick={() => this.handlePageClick(p)}
                        >
                            {p+1}
                        </button>
                    ))}
                    <button onClick={() => this.handlePrevNext('next')} disabled={currentPage === pages.slice(pages.length-1)[0] +1}>
                        <img src={forwardIcon} alt='forwardIcon' />
                        Next
                    </button>
                </div>
                <div className='section-gym-owners'>
                    <h2>Gym or studio owner?</h2>
                    <p>Join the new fitness market and get new customers!</p>
                    <Link to='/gym/list' className='section-gym-owners-btn'>
                        GET LISTED
                        <img src={forwardIcon} alt='forwardIcon' />
                    </Link>
                </div>
            </Wrapper>
        )
    }
}
