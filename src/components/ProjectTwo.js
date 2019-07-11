import React from "react"
import styled from "styled-components"
import Pic from "../gifs/titansearch.gif"
import Button from "./button"
import { Link } from "gatsby"
import Image from "../utils/Image"

const Header = () => {
  return (
    <ProjectWrapper>
      <div className="info">
        <h2>TitanSearch</h2>
        <p>
          Non esse minim dolore Lorem laborum. Lorem irure nulla amen commodo ad
          reprehenderit voluptate officia. Deserunt adipisicing laboris veniam.
        </p>
        <Link to="/projects/titansearch/">
          <Button marginTop="1rem">View Project</Button>
        </Link>
      </div>
      <Image img={Pic} />
    </ProjectWrapper>
  )
}

export default Header

const ProjectWrapper = styled.div`
  max-width: 1280px;
  padding-left: 5%;
  padding-right: 5%;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-self: center;
    h2 {
      margin: 0 0 1rem 0;
      font-size: 36px;
      font-weight: 600;
    }
    p {
      margin: 0;
    }
  }
  @media (min-width: 1000px) {
    /* margin: 0 auto 30px auto; */
    margin: 0;
    /* padding: 60px 60px 0 60px; */
    display: grid;
    grid-template-columns: repeat(1, 1fr) 65%;
    grid-column-gap: 40px;
  }
`
