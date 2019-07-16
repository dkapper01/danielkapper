import React from "react"
import styled from "styled-components"

const Header = ({ children, home }) => {
  return <HeaderWrapper home={home}>{children}</HeaderWrapper>
}

export default Header

const HeaderWrapper = styled.div`
  max-width: 100%;
  margin-top: -10px;
  min-height: 350px;
  background-image: linear-gradient(to bottom right, #3f51b5, #1a237e);
  height: ${props => (props.home ? "calc(100vh - 160px)" : "40vh")};
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 0 auto -50px auto;

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
