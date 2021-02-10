import React from 'react';
import { graphql } from "gatsby";
import "../components/layout.css"
import Layout from "../components/layout"

export default function Template({data}) {
    const {markdownRemark: post} = data; // const post = data.markdownRemark
    return (
        <Layout>
            <div className="blog-post-container">
                <h2>{post.frontmatter.title}</h2>
                <h4>{post.frontmatter.date}</h4>
                <div 
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                date
            }
        }
    }
`