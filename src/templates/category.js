// import React from 'react';
// import Select from 'react-select';
// import { Link, graphql } from 'gatsby'

// import '../styles/women.css'
// import product from '../images/product.jpg'
// import women_banner from '../images/women_banner.jpg'
// import horizontal_line from '../images/horizontal_line_white.png'
// import horizontal_line_black from '../images/horizontal_line.png'
// import background_imag from '../images/background-blue-imag.jpg'
// import {Wrapper, Hero, Slider, ImpossibleBanner, Product} from "../components"

// const products_list = [product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product,product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product, product];

// const categoryOptions = [
//     { value: 'Sport bras', label: 'Sport bras' },
//     { value: 'New Release', label: 'New Release' },
//     { value: 'Tank Tops', label: 'Tank Tops' },
//     { value: 'Leggings', label: 'Leggings' },
//     { value: 'Shorts', label: 'Shorts' },
// ];

// const sizeOptions = [
//     { value: '38DD', label: '38DD' },
//     { value: '40DD', label: '40DD' },
//     { value: '34DD', label: '34DD' },
// ];

// const collectionOptions = [
//     { value: 'Player', label: 'Player' },
//     { value: 'Player 2', label: 'Player 2' },
//     { value: 'Player 3', label: 'Player 3' },
// ];
// const sortByOptions = [
//     { value: 'Recommended', label: 'Recommended' },
//     { value: 'Recommended 2', label: 'Recommended 2' },
//     { value: 'Recommended 3', label: 'Recommended 3' },
// ];


// const categories = [
//     {
//         name: 'New Release',
//         image: women_banner,
//     }, {
//         name: 'Sport Bras',
//         image: women_banner,
//     },{
//         name: 'Tank Tops',
//         image: women_banner,
//     },{
//         name: 'Leggings',
//         image: women_banner,
//     },{
//         name: 'Shorts',
//         image: women_banner,
//     },

// ];

// export default class Category extends React.Component {
//     // state = {
//     //     size: sizeOptions[0].value.toUpperCase(),
//     //     sortBy: sortByOptions[0].value.toUpperCase(),
//     //     category: categoryOptions[0].value.toUpperCase(),
//     //     collection: collectionOptions[0].value.toUpperCase(),
//     // };
//     //
//     // handleCategorySelect = category => {
//     //     this.setState({ category: category.toUpperCase()})
//     //
//     // };
//     //
//     // handleCategoryChange = input => {
//     //     this.setState(
//     //         { category: input.value.toUpperCase()}
//     //     );
//     // };
//     //
//     // handleSizeChange = input => {
//     //     this.setState(
//     //         { size: input.value.toUpperCase()}
//     //     );
//     // };
//     // handleCollectionChange = input => {
//     //     this.setState(
//     //         { collection: input.value.toUpperCase()}
//     //     );
//     // };
//     // handleSortChange = input => {
//     //     this.setState(
//     //         { sortBy: input.value.toUpperCase()}
//     //     );
//     // };

//     render() {
//         // const { category, size, collection, sortBy } = this.state;
//         console.log(this.props.data, 'hello');
//         return (
//             <div>Hello</div>
//             // <Wrapper name='Women'>
//             //     <div className='section-background'>
//             //         <img className='section-background-blue-right women' src={background_imag} alt='background_blue_imag'/>
//             //     </div>
//             //     <Hero className='section-products-hero-main'>
//             //         <div className='section-products-hero-container'>
//             //             <div className='section-products-hero'>
//             //                 {categories.map((item, i) => (
//             //                     <div className='section-hero-category-container' style={{backgroundImage: `url(${item.image})`}} key={i}>
//             //                         <button className={`section-hero-category ${item.name.toUpperCase() === category && 'section-hero-category-active'}`} onClick={() => this.handleCategorySelect(item.name)}>
//             //                             <img src={horizontal_line} alt='horizontal_line' />
//             //                             <p>{item.name.toUpperCase()}</p>
//             //                         </button>
//             //                     </div>
//             //                 ))}
//             //             </div>
//             //             <div className='section-products-filters'>
//             //                 <div className='select-container'>
//             //                     <p>
//             //                         <img src={horizontal_line} alt='horizontal_line' />
//             //                         CATEGORIES:
//             //                     </p>
//             //                     <Select
//             //                         isDisabled={false}
//             //                         value={category}
//             //                         options={categoryOptions}
//             //                         placeholder={category}
//             //                         classNamePrefix="react-select"
//             //                         className='react-select-container'
//             //                         onChange={this.handleCategoryChange}
//             //                     />
//             //                 </div>
//             //                 <div className='select-container'>
//             //                     <p><img src={horizontal_line} alt='horizontal_line' />SIZE:</p>
//             //                     <Select
//             //                         isDisabled={false}
//             //                         value={size}
//             //                         options={sizeOptions}
//             //                         placeholder={size}
//             //                         classNamePrefix="react-select"
//             //                         className='react-select-container'
//             //                         onChange={this.handleSizeChange}
//             //                     />
//             //                 </div>
//             //                 <div className='select-container'>
//             //                     <p><img src={horizontal_line} alt='horizontal_line' />COLLECTION:</p>
//             //                     <Select
//             //                         isDisabled={false}
//             //                         value={collection}
//             //                         options={collectionOptions}
//             //                         placeholder={collection}
//             //                         classNamePrefix="react-select"
//             //                         className='react-select-container'
//             //                         onChange={this.handleCollectionChange}
//             //                     />
//             //                 </div>
//             //                 <div className='select-container'>
//             //                     <p><img src={horizontal_line} alt='horizontal_line' />SORT BY:</p>
//             //                     <Select
//             //                         isDisabled={false}
//             //                         value={sortBy}
//             //                         options={sortByOptions}
//             //                         placeholder={sortBy}
//             //                         classNamePrefix="react-select"
//             //                         className='react-select-container'
//             //                         onChange={this.handleSortChange}
//             //                     />
//             //                 </div>
//             //             </div>
//             //         </div>
//             //     </Hero>
//             //     {/*<div className='section-products-list'>*/}
//             //     {/*    {products_list.map((item, i) => (*/}
//             //     {/*        <Product key={i} img={item} name='Women hybrid Joggers Black' price='$46.00' id={i} />*/}
//             //     {/*    ))}*/}
//             //     {/*</div>*/}
//             //     <div className='section-social-media'>
//             //     <h2><img src={horizontal_line_black} alt='horizontal_line_black'/> Follow <span>fitt</span><span>find</span></h2>
//             //         <Slider type='social_media' />
//             //     </div>
//             //     <ImpossibleBanner />
//             // </Wrapper>
//         );
//     }
// }

// export const query = graphql`
//               query CategoryQuery ($category: String!, $gender: String!) {
//                     allStrapiCategory(filter: {name: {eq: $category}, gender: {type: {eq: $gender}}}) {
//                         edges {
//                             node {
//                                 name
//                                 gender {
//                                     type
//                                 }
//                                 products {
//                                     id
//                                     name
//                                     description
//                                     price
//                                     product_id
//                                     sizes {
//                                         size_name
//                                     }
//                                     images {
//                                          url
//                                     }
//                                     benefits {
//                                          benefit
//                                     }
//                                     details {
//                                         detail
//                                     }
//                                 }
//                             }
//                         }
//                     }
//               }
// `;
