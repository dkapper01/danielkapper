import React from "react"
import styled from "styled-components"
import Website from "../gifs/kappernator.gif"
import Button from "./button"
import { Link } from "gatsby"

const Header = () => {
  return (
    <ProjectWrapper>
      <div className="gif">
        <img src={Website} alt="test" />
      </div>
      <div className="info">
        <h2>Kappernator</h2>
        <p>
          Non esse minim dolore Lorem laborum. Lorem irure nulla amet commodo ad
          reprehenderit voluptate officia. Deserunt adipisicing laboris veniam.
        </p>
        <Link to="/projects/kappernator/">
          <Button marginTop="1rem">View Project</Button>
        </Link>
      </div>
    </ProjectWrapper>
  )
}

export default Header

const ProjectWrapper = styled.div`
  max-width: 1280px;
  /* margin: -120px auto 0 auto;
  padding: 60px;
  display: grid;
  grid-template-columns: 65% repeat(1, 1fr);
  grid-column-gap: 40px; */
  /* margin-top: -50px; */
  padding-left: 5%;
  padding-right: 5%;
  .gif {
    img {
      /* margin-top: -120px; */
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px,
        rgba(0, 0, 0, 0.14) 0px 10px 14px 1px,
        rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
      border-radius: 4px;
    }
  }
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
    margin: -110px auto 0 auto;
    padding: 60px;
    display: grid;
    grid-template-columns: 65% repeat(1, 1fr);
    grid-column-gap: 40px;
  }
`
