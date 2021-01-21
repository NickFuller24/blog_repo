/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const { graphql } = require('gatsby');
const path = require('path');

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions; // createPage is a property of boundActionCreators and this line accesses CreatePages

    const postTemplate = path.resolve('src/templates/post.js');

    // query to get all markdown files
    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                        date
                    }
                }
            }
        }
    }`)
    .then(res => {
        if(res.errors) {
            return Promise.reject(res.errors); // error checking if something doesn't work
        }

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}