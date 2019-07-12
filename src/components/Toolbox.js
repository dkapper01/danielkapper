import React from "react"
import styled from "styled-components"
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
          Things I use{" "}
          <span role="img" aria-label="hammer">
            🧰
          </span>
        </h2>
        <p>
          I tend to turn to these tools first but use whatever tech needed to
          get the job done. I really enjoy using JavaScript and many of its
          frameworks. Also, I'm always looking for a new skill to pick up.
        </p>
      </div>
      <div className="logos">
        <img src={GatsbyLogo} alt="gatsby" />
        <img src={ReactLogo} alt="react" />
        <img
          className="graphql"
          src={styledComponents}
          alt="styled-components"
        />
        <img src={Contentful} alt="contentful" />
        <img className="graphql" src={JavascriptLogo} alt="javascript" />
        <img src={NodeLogo} alt="node" />
        <img src={Netlify} alt="netlify" />
        <img className="graphql" src={GraphqlLogo} alt="graphql" />
      </div>
    </ProjectWrapper>
  )
}

export default Header

const ProjectWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  border-top: 1px solid lightgray;
  padding: 0 5%;

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
    padding: 80px 60px;
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-column-gap: 40px;
  }
`
