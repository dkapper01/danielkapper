import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

// import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    // if (location.pathname === rootPath || location.pathname === blogPath) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={location.pathname === blogPath ? `/blog/` : `/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/blog/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <Wrapper>
        {/* <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        > */}
        <header>{header}</header>
        <main>{children}</main>
        {/* <img
          src="../components/gify.gif"
          width="300"
          height="300"
          alt="website"
        /> */}
        {/* </div> */}
        <Footer>
          <h1>Let's get in touch</h1>
          <p>Want to get in touch? Send me an email at dkapper01@gmail.com.</p>
          <h1>👷🏻</h1>
          <p>© {new Date().getFullYear()} Daniel Kapper</p>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  border-top: 1px solid gray; 
  text-align: center;
  margin: 24px;
`

export default Layout
