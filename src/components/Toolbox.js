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
      <div>
        <h2>
          A few tools I use{" "}
          <span role="img" aria-label="hammer">
            🧰
          </span>
        </h2>
        <p>
          Non esse minim dolore Lorem laborum. Lorem irure nulla amet commodo ad
          reprehenderit voluptate officia. Deserunt adipisicing laboris veniam.
        </p>
      </div>
      <div className="logos">
        <img src={GatsbyLogo} />
        <img src={ReactLogo} />
        <img className="graphql" src={styledComponents} />
        <img src={Contentful} />
        <img className="graphql" src={JavascriptLogo} />
        <img src={NodeLogo} />
        <img src={Netlify} />
        <img className="graphql" src={GraphqlLogo} />
      </div>
    </ProjectWrapper>
  )
}

export default Header

const ProjectWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  border-top: 1px solid gray;

  img {
    width: 120px;
  }
  h2 {
    font-size: 36px;
    font-weight: 600;
  }
  .logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-row-gap: 40px;
    grid-column-gap: 40px;
    align-items: center;
    justify-items: center;
    .graphql {
      width: 100px;
    }
  }
  @media (min-width: 1000px) {
    /* margin: -80px auto 30px auto; */
    padding: 0 60px;
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-column-gap: 40px;
    /* grid-column-gap: 40px; */
  }
`
