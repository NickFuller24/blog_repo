import React from "react"
//import { Link } from "gatsby"
//import { graphql } from "gatsby"
import styled from "styled-components"
import "./layout.css"

const PostContainer = styled.div`
    width: 400px;
    height: 300px;
    background: white;
    box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.25rem;

    :hover {
        box-shadow: 0 0 8px 6px rgba(0, 0, 0, 0.25);
    }
`;

const IndexPost = () => (
    <PostContainer class="postBox">Hello</PostContainer>
)

export default IndexPost