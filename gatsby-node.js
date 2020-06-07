/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const path = require(`path`);

const categories = [
    {
        name: 'Tank tops',
        id: '49259352',
        gender: 'women',
        img: 'https://dpbfm6h358sh7.cloudfront.net/images/27677024/1394034243.jpg',
    },{
        name: 'Leggings',
        id: '49258291',
        gender: 'women',
        img: 'https://dpbfm6h358sh7.cloudfront.net/images/27677024/1394035327.jpg',
    },{
        name: 'Sport Bras',
        id: '49258289',
        gender: 'women',
        img: 'https://dpbfm6h358sh7.cloudfront.net/images/27677024/1394035026.jpg'
    },{
        name: 'New Release',
        id: '49223333',
        gender: 'women',
        img: 'https://dpbfm6h358sh7.cloudfront.net/images/27677024/1393747622.jpg'
    },{
        name: 'Shorts',
        id: '49225598',
        gender: 'women',
    },{
        name: 'Compression Tops',
        id: '49259351',
        gender: 'men',
        img: 'https://dpbfm6h358sh7.cloudfront.net/images/27677024/1394024833.jpg',
    },{
        name: 'New Release',
        id: '49259349',
        gender: 'men',
        img: 'https://dpbfm6h358sh7.cloudfront.net/images/27677024/1394024570.jpg',
    },{
        name: 'Hoodies',
        id: '49225597',
        gender: 'men',
    },{
        name: 'Tights',
        id: '49225592',
        gender: 'men',
        img: 'https://dpbfm6h358sh7.cloudfront.net/images/27677024/1394023347.jpg',
    },{
        name: 'Joggers and sweatpants',
        id: '49225597',
        img: '',
        gender: 'men',
    },
]

exports.createPages = ({ actions }) => {
    const { createPage } = actions;

    categories.forEach(category => {
        createPage({
            path: `/${category.gender}/${category.name.split(' ').join('-').toLowerCase()}`,
            component: path.resolve(`src/templates/category.js`),
            context: {
                category: category.name,
                gender: category.gender,
                id: category.id,
                img: category.img,
            },
        })
    })
};
