import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <h5>I'm Daniel</h5>
        <h1>I like to build cool websites</h1>
      </div>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #3f51b5, #1a237e);
  height: calc(100vh - 200px);
  padding: 60px;
  display: flex;
  align-items: center;
  color: white;
  h5 {
    margin: 0;
  }
  h1 {
    margin: 0;
  }
`
