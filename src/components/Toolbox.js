import React from "react"
import styled from "styled-components"
// import Button from "./button"
// import { Link } from "gatsby"
// import Section from "../utils/Section"
import GraphqlLogo from "../logos/graphql.svg"
import styledComponents from "../logos/styled.svg"
import GatsbyLogo from "../logos/gatsby.svg"
import JavascriptLogo from "../logos/javascript.svg"
import Contentful from "../logos/contentful.svg"
import NodeLogo from "../logos/node.svg"
import Netlify from "../logos/netlify.svg"
import ReactLogo from "../logos/react.svg"

const Header = () => {
  return (
    <ProjectWrapper>
      <h3>
        Tools I use{" "}
        <span role="img" aria-label="hammer">
          🧰
        </span>
      </h3>
      <img src={GatsbyLogo} />
      <img src={ReactLogo} />
      <img src={JavascriptLogo} />
      <img src={styledComponents} />
      <img src={Contentful} />
      <img src={NodeLogo} />
      <img src={Netlify} />
      <img src={GraphqlLogo} />
    </ProjectWrapper>
  )
}

export default Header

const ProjectWrapper = styled.div`
  max-width: 1280px;

  img {
    width: 100px; 
  }

  @media (min-width: 1000px) {
    /* margin: -80px auto 30px auto; */
    /* padding: 60px; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    /* grid-column-gap: 40px; */
  }
`
