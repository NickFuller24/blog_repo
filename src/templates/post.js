import React from 'react';
import { graphql } from "gatsby";

export default function Template({data}) {
    const {markdownRemark: post} = data; // const post = data.markdownRemark
    return (
        <div className="blog-post-container">
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.date}</h2>
            <div 
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
        </div>
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