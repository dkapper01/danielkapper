import React from "react"
import styled from "styled-components"
import Navbar from "./navbar/Navbar"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    let header

    return (
      <Wrapper>
        <Navbar />
        <header>{header}</header>
        <main>{children}</main>
        <Footer>
          <h1>Let's get in touch</h1>
          <p>Want to get in touch? Send me an email at dkapper01@gmail.com.</p>
          <h1 className="emj">
            <span role="img" aria-label="hammer">
              👷
            </span>
          </h1>
          <p>©{new Date().getFullYear()} Daniel Kapper</p>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 100%;
  position: relative; 
`

const Footer = styled.footer`
  border-top: 1px solid lightgray;
  text-align: center;
  padding: 80px 0 80px 0;
  margin: 0;
  span {
    margin-top: 1rem;
    display: inline-block;
  }
  h1 {
    margin-top: 0;
  }
  p {
    margin-bottom: 0;
  }
`

export default Layout
