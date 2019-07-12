import React from "react"
import Pic from "../gifs/titansearch.gif"
import Image from "../utils/Image"
import Section from "../utils/Section"
import Info from "../utils/Info"
import styled from "styled-components"

const ProjectTwo = () => {
  return (
    <Left>
      <Info
        project="TitanSearch"
        details="Non esse minim dolore Lorem laborum. Lorem irure nulla amen commodo ad
        reprehenderit voluptate officia. Deserunt adipisicing laboris veniam."
        slug="titansearch"
      />
      <Image img={Pic} />
    </Left>
  )
}

export default ProjectTwo

const Left = styled(Section)`
  max-width: 1280px;
  padding-left: 5%;
  padding-right: 5%;
  display: grid; 
  @media (min-width: 1000px) {
    margin: 0;
    padding: 0 60px 60px 60px;
    display: grid;
    grid-template-columns: repeat(1, 1fr) 65%;
    grid-column-gap: 40px;
  }
`
