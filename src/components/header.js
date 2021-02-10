import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "./layout.css"

const HeaderWrapper = styled.header`
  background-color: #666A86;
  height: 7.813rem;
  position: relative;
`;

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 4rem;
  position: absolute;
  left: 0;                    // Stick the title to the far left
  margin-left: 5vw;
  font-color: #E5E5E5;
  display: flex;
  max-width: 50%;
  height: 100%;
  align-items: center;
`;

const NavLinksWrapper = styled.div`
  font-weight: 500;
  font-size: 1.75rem;
  position: absolute;
  right: 0;                   // Stick the nav links to the far right
  margin-right: 5vw;
  display: flex;              // This line and the next two align the Link vertically
  height: 100%;
  align-items: center;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <TitleWrapper>
      <Link to="/"
        style={{
          textDecoration: `none`,
          color: `#E5E5E5`
        }}
      > 
        {siteTitle} 
      </Link>
    </TitleWrapper>
    <NavLinksWrapper>
      <Link to="#"
        class="NavLink"
        style={{
          textDecoration: `none`,
          color: `#E5E5E5`,
          marginRight: `5vw`,
        }}
      > 
        Categories 
      </Link>
      <Link to="#"
        class="NavLink"
        style={{
          textDecoration: `none`,
          color: `#E5E5E5`,
        }}
      > 
        About Me 
      </Link>
    </NavLinksWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
