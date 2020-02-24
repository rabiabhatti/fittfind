import React from 'react'
import {Link} from "gatsby";
import Select from 'react-select';

import { Wrapper, Hero } from '../../components'
import forwardIcon from "../../images/forward-icon.png";

const locations = ['london', 'paris', 'new york', 'sydney'];

export default class FundGym extends React.Component {
    state = {
      // location: window.location.href.split('location=')[1]
    };

    // handleLocationChange = (text) => {
    //     this.setState({ location: text })
    // };

    render() {
        let currentURL = 'london';
        // if (typeof window !== "undefined") {
        //     currentURL = window.location.href.split('/')[window.location.href.split('/').length -1];
        // }
        // const { location } = this.state;

        return (
            <Wrapper name='Find Gym' location={this.props.location}>
                <Hero>
                    <Select
                        isDisabled={false}
                        value={currentURL}
                        options={locations}
                        placeholder={currentURL}
                        classNamePrefix="gym-select"
                        className='gym-select-container'
                        // onChange={this.handleLocationChange}
                    />
                </Hero>
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
