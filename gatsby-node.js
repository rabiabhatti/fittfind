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

    // Query for articles nodes to use in creating pages.
    return getProducts;
};
