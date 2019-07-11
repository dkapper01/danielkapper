import React from "react"
import styled from "styled-components"
import Icons from "../components/landingPage/Icons"

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <p>I'm Daniel</p>
        <h1>
          I like to build cool websites{" "}
          {/* <span role="img" aria-label="hammer">
            🔨
          </span> */}
        </h1>
        {/* <p>
          That create fast and secure sites and dynamic apps with JavaScript,
          APIs, and prerendered Markup, served without web servers.
        </p> */}
        <Icons />
      </div>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #3f51b5, #1a237e);
  height: calc(100vh - 160px);
  padding: 60px;
  display: flex;
  align-items: center;
  color: white;
  p {
    margin-bottom: 0.4rem;
    font-size: 1rem;
    font-weight: lighter;
    color: white;
    width: 140px;
  }
  h1 {
    margin: 0;
    font-size: 3.5rem;
    font-weight: 800;
    padding: 0;
    color: white;
  }

`
