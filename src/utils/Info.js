import React from "react"
import styled from "styled-components"
import Button from "../components/elements/button"
import { Link } from "gatsby"

const Info = ({ project, details, slug }) => {
  return (
    <InfoWrapper>
      <h2>{project}</h2>
      <p>{details}</p>
      <Link to={`/projects/${slug}`}>
        <Button type="" marginTop="1rem">
          View Project
        </Button>
      </Link>
    </InfoWrapper>
  )
}

export default Info

const InfoWrapper = styled.div`
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
`
