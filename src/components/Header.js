import React from "react"
import styled from "styled-components"
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi"

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
        <div className="icons">
          <FiLinkedin /> <FiGithub /> <FiTwitter /> <FiInstagram />
        </div>
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
  .icons {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    word-spacing: 5px;
    display: flex;
    background-color: white;
    justify-content: space-around;
    padding: 5px;
    width: 180px;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px,
      rgba(0, 0, 0, 0.14) 0px 10px 14px 1px,
      rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
    border-radius: 4px;
  }
  a {
    text-decoration: none;
  }
  p {
    margin-bottom: 0.4rem;
    font-size: 1rem;
    font-weight: lighter;
    color: white;
  }
  h1 {
    margin: 0;
    font-size: 3.5rem;
    font-weight: 800;
    padding: 10px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px,
      rgba(0, 0, 0, 0.14) 0px 10px 14px 1px,
      rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
    border-radius: 4px;
  }
  .cool-website {
    /* text-decoration: underline; */
  }
`
