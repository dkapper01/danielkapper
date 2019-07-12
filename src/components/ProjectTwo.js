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
        details="Developed a search engine with JavaScript and Google Custom Search API to solve a critical and costly business problem at TitanHouse, and designed it with Bootstrap."
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
  display: flex;
  flex-direction: column-reverse;
  margin: 0 auto;
  @media (min-width: 1000px) {
    margin: 0 auto;
    padding: 0 60px 80px 60px;
    display: grid;
    grid-template-columns: repeat(1, 1fr) 65%;
    grid-column-gap: 40px;
  }
`
