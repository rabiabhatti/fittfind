import React from 'react'
import {Link} from "gatsby";
import Select from 'react-select';

import { Wrapper, Hero } from '../../components'
import forwardIcon from "../../images/forward-icon.png";

const locations = ['london', 'paris', 'new york', 'sydney'];

export default class FundGym extends React.Component {
    state = {
      location: 'london'
    };

    handleLocationChange = (text) => {
        this.setState({ location: text })
    };

    render() {
        const { location } = this.state;

        return (
            <Wrapper name='Find Gym'>
                <Hero>
                    <Select
                        isDisabled={false}
                        value={location}
                        options={locations}
                        placeholder={location}
                        classNamePrefix="gym-select"
                        className='gym-select-container'
                        onChange={this.handleLocationChange}
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
