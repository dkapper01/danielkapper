import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Resume from "../../../static/daniel_kapper_resume.pdf"

const Navbar = () => {
  return (
    <NavbarWrapper>
      <a
        href="http://entrepreneuriallythinking.com/2017/07/26/4-4-local-entrepreneurs-riding-the-health-iot-wave/"
        target="_blank"
        style={{ margin: "10px" }}
        rel="noopener noreferrer"
      >
        Media
      </a>
      <a href={Resume} target="_blink" rel="noopener noreferrer">
        Resume
      </a>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.nav`
  position: absolute;
  top: 1%;
  right: 10%;
  a:link {
    font-size: 1rem;
    font-weight: lighter;
  }
`
