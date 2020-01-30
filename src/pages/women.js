import React from 'react';
import Select from 'react-select';

import '../styles/women.css'
import product from '../images/product.jpg'
import slider1 from "../images/home-slider-1.jpg";
import slider2 from "../images/home-slider-2.jpg";
import slider3 from "../images/home-slider-3.jpg";
import slider4 from "../images/home-slider-4.jpg";
import women_banner from '../images/women_banner.jpg'
import horizontal_line from '../images/horizontal_line.png'
import {Wrapper, Hero, Slider, ImpossibleBanner, Product} from "../components"

const products_list = [product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product,product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product];

const categoryOptions = [
    { value: 'Sport bras', label: 'Sport bras' },
    { value: 'Leggings', label: 'Leggings' },
    { value: 'Shorts', label: 'Shorts' },
];
const sizeOptions = [
    { value: '38DD', label: '38DD' },
    { value: '40DD', label: '40DD' },
    { value: '34DD', label: '34DD' },
];
const collectionOptions = [
    { value: 'Player', label: 'Player' },
    { value: 'Player 2', label: 'Player 2' },
    { value: 'Player 3', label: 'Player 3' },
];
const sortByOptions = [
    { value: 'Recommended', label: 'Recommended' },
    { value: 'Recommended 2', label: 'Recommended 2' },
    { value: 'Recommended 3', label: 'Recommended 3' },
];


const categories = [
    {
        name: 'New Release',
        image: women_banner,
    }, {
        name: 'Sport Bras',
        image: women_banner,
    },{
        name: 'Tank Tops',
        image: women_banner,
    },{
        name: 'Leggings',
        image: women_banner,
    },{
        name: 'Shorts',
        image: women_banner,
    },

];

export default class Men extends React.Component {
    state = {
        size: '38DD',
        collection: 'player',
        sortBy: 'recommended',
        category: categories[1].name,
        sizeOption: sizeOptions[0].value.toUpperCase(),
        sortByOption: sortByOptions[0].value.toUpperCase(),
        categoryOption: categoryOptions[0].value.toUpperCase(),
        collectionOption: collectionOptions[0].value.toUpperCase(),
    };

    handleCategoryChange = input => {
        this.setState(
            { categoryOption: input.value.toUpperCase()}
        );
    };

    handleSizeChange = input => {
        this.setState(
            { sizeOption: input.value.toUpperCase()}
        );
    };
    handleCollectionChange = input => {
        this.setState(
            { collectionOption: input.value.toUpperCase()}
        );
    };
    handleSortChange = input => {
        this.setState(
            { sortByOption: input.value.toUpperCase()}
        );
    };

    render() {
        const { categoryOption, sizeOption, collectionOption, sortByOption } = this.state;
        return (
            <Wrapper name='Women'>
                <Hero>
                    <div className='section-products-hero'>
                        {categories.map((item, i) => (
                            <div className='section-hero-category' key={i} style={{ backgroundImage: `url(${item.image})` }}>
                                <img src={horizontal_line} alt='horizontal_line' />
                                <p>{item.name.toUpperCase()}</p>
                            </div>
                        ))}
                    </div>
                </Hero>
                <div className='section-products-filters'>
                    <div className='select-container'>
                        <span>CATEGORIES:</span>
                        <Select
                            isDisabled={false}
                            value={categoryOption}
                            options={categoryOptions}
                            placeholder={categoryOption}
                            classNamePrefix="react-select"
                            className='react-select-container'
                            onChange={this.handleCategoryChange}
                        />
                    </div>
                    <div className='select-container'>
                        <span>SIZE:</span>
                        <Select
                            isDisabled={false}
                            value={sizeOption}
                            options={sizeOptions}
                            placeholder={sizeOption}
                            classNamePrefix="react-select"
                            className='react-select-container'
                            onChange={this.handleSizeChange}
                        />
                    </div>
                    <div className='select-container'>
                        <span>COLLECTION:</span>
                        <Select
                            isDisabled={false}
                            value={collectionOption}
                            options={collectionOptions}
                            placeholder={collectionOption}
                            classNamePrefix="react-select"
                            className='react-select-container'
                            onChange={this.handleCollectionChange}
                        />
                    </div>
                    <div className='select-container'>
                        <span>SORT BY:</span>
                        <Select
                            isDisabled={false}
                            value={sortByOption}
                            options={sortByOptions}
                            placeholder={sortByOption}
                            classNamePrefix="react-select"
                            className='react-select-container'
                            onChange={this.handleSortChange}
                        />
                    </div>
                </div>
                <div className='section-products-list'>
                    {products_list.map((item, i) => (
                        <Product key={i} img={item} name='Women hybrid Joggers Black' price='$46.00' id={i} />
                    ))}
                </div>
                <div className='section-social-media'>
                    <h2>--- Follow FittFind</h2>
                    <Slider type='social_media' />
                </div>
                <ImpossibleBanner />
            </Wrapper>
        );
    }
}
