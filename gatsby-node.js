/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            return result;
        })
    )
});

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const getProducts = makeRequest(graphql, `
    {
      allStrapiProduct {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
        result.data.allStrapiProduct.edges.forEach(({ node }) => {
            createPage({
                path: `/${node.id}`,
                component: path.resolve(`src/templates/product.js`),
                context: {
                    id: node.id,
                },
            })
        })
    });

    const getCategories = makeRequest(graphql, `
        {
          allStrapiCategory {
            edges {
              node {
                name
                genders {
                  type
                }
              }
            }
          }
        }
    `).then(result => {
        result.data.allStrapiCategory.edges.forEach(({ node }) => {
            const category = node;
            category.genders.map(gender => {
                createPage({
                    path: `/${gender.type}/${category.name.split(' ').join('').toLowerCase()}`,
                    component: path.resolve(`src/templates/category.js`),
                    context: {
                        category: category.name,
                        gender: gender.type
                    },
                })
            });
        })
    });

    return Promise.all([
        getCategories,
        getProducts,
    ])
};
