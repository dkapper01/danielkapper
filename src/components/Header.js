import React from "react"
import styled from "styled-components"

const Header = ({ children, home }) => {
  return <HeaderWrapper home={home}>{children}</HeaderWrapper>
}

export default Header

const HeaderWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #3f51b5, #1a237e);
  height: ${props => (props.home ? "calc(100vh - 160px)" : "40vh")};

  /* height: calc(100vh - 160px); */
  margin-bottom: -50px; 
  padding: 60px;
  display: grid;
  /* grid-template-rows: 100px 100px 100px; */
  /* align-items: center; */
  p {
    color: white;
    margin: 0;
  }
  h1 {
    margin: 0;
    font-size: 3.5rem;
    font-weight: 800;
    padding: 0;
    color: white;
  }
`
