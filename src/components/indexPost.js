import React from "react"
//import { Link } from "gatsby"
import { useStaticQuery,graphql } from "gatsby"
import styled from "styled-components"
import "./layout.css"
import Img from "gatsby-image"

const PostContainer = styled.div`
  width: 400px;
  height: 300px;
  background: white;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;
  display: grid;              // this will be the parent for title, date, picture, and description
  grid-template-columns: 5% 45% 45% 5%;
  grid-template-rows: 5% auto 5% 45% 5%;

  :hover {
    box-shadow: 0 0 8px 6px rgba(0, 0, 0, 0.25);
  }
`;

const Title = styled.h2`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 2rem;
  font-weight: 600;
  color: #4D4F65;
  margin: 0;
`;

const PostImageContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const IndexPost = () => (
  <PostContainer>
    <Title>
      Blog Post Title
    </Title>
    <PostImageContainer>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </PostImageContainer>
  </PostContainer>
)

// This is from the image.js file that came with the gatsby default starter. Gatsby has a built
// in process to optimize images
const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

export default IndexPost