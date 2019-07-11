import React from "react"
import styled from "styled-components"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    let header

    return (
      <Wrapper>
        <header>{header}</header>
        <main>{children}</main>
        <Footer>
          <h1>Let's get in touch</h1>
          <p>Want to get in touch? Send me an email at dkapper01@gmail.com.</p>
          <h1>
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
  max-width: 1280px;
`

const Footer = styled.footer`
  border-top: 1px solid gray;
  text-align: center;
  padding: 60px 0 60px 0;
  margin: 0;
  h1 {
    margin-top: 0;
  }
  p {
    margin-bottom: 0;
  }
`

export default Layout
