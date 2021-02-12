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

const PostDateContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  font-size: 1rem;
  color: #95E4C3;
  font-weight: 500;
`;

const PostDescription = styled.p`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: 1.25rem;
  font-weight: 500;
  color: #4D4F65;
`;
const IndexPost = () => (
  <PostContainer>
    <Title>
      Blog Post Title
    </Title>
    <PostImageContainer>
      <h2>Image Goes Here</h2>
    </PostImageContainer>
    <PostDateContainer>
      00/11/2233
    </PostDateContainer>
    <PostDescription>
      This will be some random description of this really cool blog post that I made. When clicked, it will bring the user to the post
    </PostDescription>
  </PostContainer>
)


export default IndexPost