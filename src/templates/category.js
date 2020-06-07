import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import {Link, navigate} from 'gatsby'

import '../styles/women.css'
import {get} from '../api/ecwid'
import {allCategories} from '../../common'
import background_imag from '../images/background-blue-imag.jpg'
import horizontal_line_black from '../images/horizontal_line.png'
import horizontal_line from '../images/horizontal_line_white.png'
import default_banner from '../images/default_category_banner.png'
import {Wrapper, Hero, Slider, ImpossibleBanner, Product} from "../components"

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


export default function Category(props) {
    const [categories, setCategories] =  useState([]);
    const [productList, setProductList] =  useState([]);
    const [size, setSize] = useState(sizeOptions[0].value.toUpperCase());
    const [categoryOptions, setCategoryOptions] =  useState([]);
    const [sortBy, setSortBy] = useState(sortByOptions[0].value.toUpperCase());
    const [collection, setCollection] = useState(collectionOptions[0].value.toUpperCase());

    const gender = props.pathContext.gender;
    const currentCategory = props.pathContext.category.toLowerCase()

    useEffect(() => {
        const list = allCategories.filter(i => i.gender === props.pathContext.gender)
        const options = list.map(item => ({value: item.name, label: item.name}))
        setCategoryOptions(options)
        getBanners(list)

        getCategoryItems(props.pathContext.id)
    }, [props.pathContext]);

    const getCategoryItems = (id) => {
        get('categories', id).then(res => {
            setProductList(res.productIds);
        })
    }

    const getBanners = (list) => {
        const copy = list.slice();
        list.map(item => {
            get('categories', item.id).then(res => {
                const found = copy.find(i => i.id === item.id)
                found['banner'] = res.hdThumbnailUrl || default_banner
            })
        })
        setCategories(copy)
    }

    const handleCategoryChange = async input => {
        const gender = props.pathContext.gender;
        await navigate(`/${gender}/${input.value.toLowerCase().split(' ').join('-')}/`);
    };

    return (
        <Wrapper name='Women' location={props.location}>
            <div className='section-background'>
                <img className='section-background-blue-right women' src={background_imag} alt='background_blue_imag'/>
            </div>
            <Hero className='section-products-hero-main'>
                <div className='section-products-hero-container'>
                    <div className='section-products-hero-container'>
                        <div className='section-products-hero'>
                            {categories.map((item, i) => (
                                <div className='section-hero-category-container' style={{backgroundImage: `url(${item.banner})`}} key={i}>
                                    <Link
                                        to={`/${gender}/${item.name.toLowerCase().split(' ').join('-')}/`}
                                        className={`section-hero-category ${item.name.toUpperCase() === currentCategory.toUpperCase() && 'section-hero-category-active'}`}
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
                                value={currentCategory}
                                options={categoryOptions}
                                classNamePrefix="react-select"
                                className='react-select-container'
                                placeholder={currentCategory.toUpperCase()}
                                onChange={handleCategoryChange}
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
                                onChange={input => setSize(input.value.toUpperCase())}
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
                                onChange={input => setCollection(input.value.toUpperCase())}
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
                                onChange={input => setSortBy(input.value.toUpperCase())}
                            />
                        </div>
                    </div>
                </div>
            </Hero>
            <div className='section-products-list'>
                {!! productList && productList.length && productList.map((item, i) => (
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

