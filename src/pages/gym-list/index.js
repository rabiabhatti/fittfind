import React from 'react'
import { Link, navigate } from 'gatsby'
import Select from 'react-select';

import '../../styles/gym-list.css'
import { Wrapper, Hero } from '../../components'
import forwardIcon from "../../images/forward-icon.png";
import forwardIconDark from "../../images/forward_icon_dark.png";
import backward_icon from '../../images/backward_icon_dark.png';
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

    handlePrevNext = async (type) => {
        const currentPage = this.props.location.search.split('=')[this.props.location.search.split('=').length -1];
        await navigate(`/gym-list?page=${type === 'next' ? parseInt(currentPage) + 1 : parseInt(currentPage) - 1}`)
    };

    handlePageClick = async (p) => {
        await navigate(`/gym-list?page=${p+1}`)
    };

    render() {
        const pages = [0, 1, 2, 3, 4, 5, 6, 7];
        const { amenityOption, location, facilityOption } = this.state;
        let currentPage = this.props.location.search.split('=')[this.props.location.search.split('=').length -1];

        return (
            <Wrapper name='List Yourself' location={this.props.location} gymNav={true}>
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
                            <Link to='/' className='section-gym-list-map-btn'>
                                Show map
                            </Link>
                        </div>
                    </div>
                </Hero>
                <div className='section-gym-all-list row-center'>
                    {gym_list.map((item, i) =>(
                        <div className='section-single-gym-container' key={i} >
                            <div className='section-single-gym-banner'>
                                {item.featured && <img src={require(`../../images/gym_star.png`)} alt='gym_star' width={50} />}
                                <img src={require(`../../images/gym_banner_${i+1}.jpg`)} alt='gym_banner' width={200} />
                            </div>
                            <Link
                                className='section-single-gym-desc'
                                to={`/gym-list/find?name=${item.name.split(' ').join('').split('/').join('').toLowerCase()}&location=${location.toLowerCase()}`}
                            >
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
                    <button
                        disabled={parseInt(currentPage) === 1}
                        className='section-gym-list-pages-back-btn'
                        onClick={() => this.handlePrevNext('prev')}
                    >
                        <img src={backward_icon} alt='backward_icon' width={18} />
                        Previous
                    </button>
                    {pages.map(p => (
                        <button
                            key={p}
                            onClick={() => this.handlePageClick(p)}
                            className={`section-gym-list-page-no-btn ${currentPage === p && `section-gym-list-current-page`}`}
                        >
                            {p+1}
                        </button>
                    ))}
                    <button
                        className='section-gym-list-pages-forward-btn'
                        onClick={() => this.handlePrevNext('next')}
                        disabled={parseInt(currentPage) === pages.slice(pages.length-1)[0] +1}
                    >
                        Next
                        <img src={forwardIconDark} alt='forwardIcon' width={18} />
                    </button>
                </div>
                <div className='section-gym-owners'>
                    <h2>Gym or studio owner?</h2>
                    <p>Join the new fitness market and get new customers!</p>
                    <Link to='/list-yourself/' className='section-gym-owners-btn'>
                        GET LISTED
                        <img src={forwardIcon} alt='forwardIcon' />
                    </Link>
                </div>
            </Wrapper>
        )
    }
}
