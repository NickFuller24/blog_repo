import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

const LinkWrapper = styled.div`
    display: block;
`;

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <h2>Index</h2>
    { data.allMarkdownRemark.edges.map(post => (
      <LinkWrapper>
        <Link 
          key={post.node.id}
          href={post.node.frontmatter.path}>{post.node.frontmatter.title}
        </Link>
        </LinkWrapper>
    ))}
  </Layout>
)

export default IndexPage

export const postQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }  
`