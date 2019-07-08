import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <p>I'm Daniel</p>
        <h1>
          I like to build cool websites{" "}
          <span role="img" aria-label="hammer">
            🔨
          </span>
        </h1>
      </div>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #3f51b5, #1a237e);
  height: calc(90vh - 200px);
  padding: 60px;
  display: flex;
  align-items: center;
  color: white;
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
    font-size: 1rem;
    font-weight: lighter;
    color: white;
  }
  h1 {
    margin: 0;
    font-size: 4rem;
    font-weight: 800;
    padding: 10px; 
    background-color: white; 
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px,
        rgba(0, 0, 0, 0.14) 0px 10px 14px 1px,
        rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
      border-radius: 4px;

    /* color: white; */
    /* background-image: linear-gradient(
      to right top,
      #ffffff,
      #f3f2fd,
      #e6e5fc,
      #d8d9fb,
      #c9cdfa
    ); */
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
`
