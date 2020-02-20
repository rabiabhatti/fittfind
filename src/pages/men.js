import React from 'react';
import Select from 'react-select';

import '../styles/women.css'
import product from '../images/product.jpg'
import men_banner from '../images/men_banner.jpg'
import horizontal_line from '../images/horizontal_line_white.png'
import horizontal_line_black from '../images/horizontal_line.png'
import background_imag from '../images/background-blue-imag.jpg'
import {Wrapper, Hero, Slider, ImpossibleBanner, Product} from "../components"

const products_list = [product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product,product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product];

const categoryOptions = [
    { value: 'Compression tops', label: 'Compression tops' },
    { value: 'New Release', label: 'New Release' },
    { value: 'Tights', label: 'Tights' },
    { value: 'Hoodies', label: 'Hoodies' },
    { value: 'Joggers & sweatpants', label: 'Joggers & sweatpants' },
];

const sizeOptions = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
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
        image: men_banner,
    }, {
        name: 'Compression tops',
        image: men_banner,
    },{
        name: 'Tights',
        image: men_banner,
    },{
        name: 'Hoodies',
        image: men_banner,
    },{
        name: 'Joggers & sweatpants',
        image: men_banner,
    },

];

export default class Men extends React.Component {
    state = {
        size: sizeOptions[0].value.toUpperCase(),
        sortBy: sortByOptions[0].value.toUpperCase(),
        category: categoryOptions[0].value.toUpperCase(),
        collection: collectionOptions[0].value.toUpperCase(),
    };

    handleCategoryChange = input => {
        this.setState(
            { category: input.value.toUpperCase()}
        );
    };

    handleSizeChange = input => {
        this.setState(
            { size: input.value.toUpperCase()}
        );
    };
    handleCollectionChange = input => {
        this.setState(
            { collection: input.value.toUpperCase()}
        );
    };
    handleSortChange = input => {
        this.setState(
            { sortBy: input.value.toUpperCase()}
        );
    };

    render() {
        const { category, size, collection, sortBy } = this.state;
        return (
            <Wrapper name='Men'>
            <div className='section-background'>
                <img className='section-background-blue-right Men' src={background_imag} alt='background_blue_imag'/>
            </div>
                <Hero className='section-products-hero-main'>
                    <div className='section-products-hero-container'>
                        <div className='section-products-hero'>
                            {categories.map((item, i) => (
                                <div className='section-hero-category-container' style={{backgroundImage: `url(${item.image})`}} key={i}>
                                    <button className={`section-hero-category ${item.name.toUpperCase() === category && 'section-hero-category-active'}`} onClick={() => this.setState({ category: item.name.toUpperCase() })}>
                                        <img src={horizontal_line} alt='horizontal_line' />
                                        <p>{item.name.toUpperCase()}</p>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className='section-products-filters'>
                            <div className='select-container'>
                                <p>
                                    <img src={horizontal_line_black} alt='horizontal_line' />
                                    CATEGORIES:
                                </p>
                                <Select
                                    isDisabled={false}
                                    value={category}
                                    options={categoryOptions}
                                    placeholder={category}
                                    classNamePrefix="react-select"
                                    className='react-select-container'
                                    onChange={this.handleCategoryChange}
                                />
                            </div>
                            <div className='select-container'>
                                <p><img src={horizontal_line_black} alt='horizontal_line' />SIZE:</p>
                                <Select
                                    isDisabled={false}
                                    value={size}
                                    options={sizeOptions}
                                    placeholder={size}
                                    classNamePrefix="react-select"
                                    className='react-select-container'
                                    onChange={this.handleSizeChange}
                                />
                            </div>
                            <div className='select-container'>
                                <p><img src={horizontal_line_black} alt='horizontal_line' />COLLECTION:</p>
                                <Select
                                    isDisabled={false}
                                    value={collection}
                                    options={collectionOptions}
                                    placeholder={collection}
                                    classNamePrefix="react-select"
                                    className='react-select-container'
                                    onChange={this.handleCollectionChange}
                                />
                            </div>
                            <div className='select-container'>
                                <p><img src={horizontal_line_black} alt='horizontal_line' />SORT BY:</p>
                                <Select
                                    isDisabled={false}
                                    value={sortBy}
                                    options={sortByOptions}
                                    placeholder={sortBy}
                                    classNamePrefix="react-select"
                                    className='react-select-container'
                                    onChange={this.handleSortChange}
                                />
                            </div>
                        </div>
                    </div>
                </Hero>
                <div className='section-products-list'>
                    {products_list.map((item, i) => (
                        <Product key={i} img={item} name='Women hybrid Joggers Black' price='$46.00' id={i} />
                    ))}
                </div>
                <div className='section-social-media'>
                    <h2><img src={horizontal_line_black} alt='horizontal_line_black'/> Follow <span>fitt</span><span>find</span></h2>
                    <Slider type='social_media' />
                </div>
                <ImpossibleBanner />
            </Wrapper>
        );
    }
}
