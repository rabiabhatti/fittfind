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
    },{
        name: 'Leggings',
        id: '49258291',
        gender: 'women',
    },{
        name: 'Sport Bras',
        id: '49258289',
        gender: 'women',
    },{
        name: 'New Release',
        id: '49223333',
        gender: 'women',
    },{
        name: 'Shorts',
        id: '49225598',
        gender: 'women',
    },{
        name: 'Compression Tops',
        id: '49259351',
        gender: 'men',
    },{
        name: 'New Release',
        id: '49259349',
        gender: 'men',
    },{
        name: 'Hoodies',
        id: '49225597',
        gender: 'men',
    },{
        name: 'Tights',
        id: '49225592',
        gender: 'men',
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
