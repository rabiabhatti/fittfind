import React from 'react';
import Select from 'react-select';
import {Link, navigate} from 'gatsby'

import '../styles/women.css'
import { request } from "../api/ecwid";
import product_1 from "../images/product-1.jpg";
import product_2 from "../images/product-2.jpg";
import product_3 from "../images/product-3.jpg";
import product_4 from "../images/product-4.jpg";
import men_banner from "../images/men_banner.jpg";
import horizontal_line from '../images/horizontal_line_white.png'
import horizontal_line_black from '../images/horizontal_line.png'
import background_imag from '../images/background-blue-imag.jpg'
import women_category_bras from "../images/women_category_bras.jpg";
import women_category_shorts from "../images/women_category_shorts.jpg";
import women_category_leggings from "../images/women_category_leggings.jpg";
import women_category_tanktops from "../images/women_category_tanktops.jpg";
import women_new_release_banner from "../images/women_new_release_banner.jpg";
import {Wrapper, Hero, Slider, ImpossibleBanner, Product} from "../components"

const products_list = [
    {
        name: 'Women hybrid Joggers Black',
        price: 45,
        image: product_1,
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_2
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: product_3
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_4
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: women_category_bras
    },{
        name: 'Women hybrid Joggers',
        price: 100,
        image: women_category_shorts
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_4
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: women_category_leggings
    },{
        name: 'Women hybrid Joggers',
        price: 100,
        image: women_category_bras
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_2
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: women_category_shorts
    },{
        name: 'Women hybrid Joggers Black',
        price: 45,
        image: product_1,
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_2
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: product_3
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_4
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: product_3
    },{
        name: 'Women hybrid Joggers',
        price: 100,
        image: product_4
    },{
        name: 'New! Sport mesh jacket',
        price: 30,
        image: product_2
    },{
        name: 'Sport mesh jacket',
        price: 75,
        image: women_category_shorts
    },
];
const women_categoryOptions = [
    { value: 'Sport bras', label: 'Sport bras' },
    { value: 'New Release', label: 'New Release' },
    { value: 'Tank Tops', label: 'Tank Tops' },
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

const men_categoryOptions = [
    { value: 'Compression tops', label: 'Compression tops' },
    { value: 'New Release', label: 'New Release' },
    { value: 'Tights', label: 'Tights' },
    { value: 'Hoodies', label: 'Hoodies' },
    { value: 'Joggers and sweatpants', label: 'Joggers and sweatpants' },
];


const women_categories = [
    {
        name: 'New Release',
        image: women_new_release_banner,
    }, {
        name: 'Sport Bras',
        image: women_category_bras,
    },{
        name: 'Tank Tops',
        image: women_category_tanktops,
    },{
        name: 'Leggings',
        image: women_category_leggings,
    },{
        name: 'Shorts',
        image: women_category_shorts,
    },

];

const men_categories = [
    {
        name: 'New Release',
        image: men_banner,
    }, {
        name: 'Compression tops',
        image: men_banner,
    }, {
        name: 'Tights',
        image: men_banner,
    }, {
        name: 'Hoodies',
        image: men_banner,
    }, {
        name: 'Joggers and sweatpants',
        image: men_banner,
    },

];

export default class Category extends React.Component {
    state = {
        products_list: [],
        size: sizeOptions[0].value.toUpperCase(),
        sortBy: sortByOptions[0].value.toUpperCase(),
        collection: collectionOptions[0].value.toUpperCase(),
        category: this.props.pathContext.category.toLowerCase(),
    };

    componentDidMount() {
        this.getCategoryItems(this.props.pathContext.id)
    }

    getCategoryItems = (id) => {
        fetch(`https://app.ecwid.com/api/v3/27677024/categories/${id}?token=secret_TyZ2wNXHhsuQxPrNfjzdVm1k8pL5Ra2H`).then(response => response.text()).then(res => {
            const result  = JSON.parse(res)
            this.setState({ products_list: result.productIds || [] })
        })
    }

    handleCategoryChange = async input => {
        const gender = this.props.pathContext.gender;
        await navigate(`/${gender}/${input.value.toLowerCase().split(' ').join('-')}/`);
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
        const { category, size, collection, sortBy, products_list } = this.state;
        const gender = this.props.pathContext.gender;
        const categories = gender === 'men' ? men_categories : women_categories;
        const categoryOptions = gender === 'men' ? men_categoryOptions : women_categoryOptions;

        return (
            <Wrapper name='Women' location={this.props.location}>
                <div className='section-background'>
                    <img className='section-background-blue-right women' src={background_imag} alt='background_blue_imag'/>
                </div>
                <Hero className='section-products-hero-main'>
                    <div className='section-products-hero-container'>
                        <div className='section-products-hero-container'>
                            <div className='section-products-hero'>
                                {categories.map((item, i) => (
                                    <div className='section-hero-category-container' style={{backgroundImage: `url(${item.image})`}} key={i}>
                                        <Link
                                            to={`/${gender}/${item.name.toLowerCase().split(' ').join('-')}/`}
                                            className={`section-hero-category ${item.name.toUpperCase() === category.toUpperCase() && 'section-hero-category-active'}`}
                                        >
                                            <img src={horizontal_line} alt='horizontal_line' />
                                            <p>{item.name.toUpperCase()}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='section-products-filters'>
                            <div className='select-container'>
                                <p>
                                    <img src={horizontal_line} alt='horizontal_line' />
                                    CATEGORIES:
                                </p>
                                <Select
                                    isDisabled={false}
                                    value={category}
                                    options={categoryOptions}
                                    classNamePrefix="react-select"
                                    className='react-select-container'
                                    placeholder={category.toUpperCase()}
                                    onChange={this.handleCategoryChange}
                                />
                            </div>
                            <div className='select-container'>
                                <p><img src={horizontal_line} alt='horizontal_line' />SIZE:</p>
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
                                <p><img src={horizontal_line} alt='horizontal_line' />COLLECTION:</p>
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
                                <p><img src={horizontal_line} alt='horizontal_line' />SORT BY:</p>
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
                    {products_list.length && products_list.map((item, i) => (
                        <Product key={i} id={item} img={item.image} name={item.name} price={`$${item.price}.00`} />
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

