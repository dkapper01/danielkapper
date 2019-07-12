import React from "react"
import Pic from "../gifs/kodluyoruz.gif"
import Image from "../utils/Image"
import Section from "../utils/Section"
import Info from "../utils/Info"

const ProjectTwo = () => {
  return (
    <Section>
      <Image img={Pic} />

      <Info
        project="Kodluyoruz"
        details="Created a Progressive Web App for a client using GatsbyJS, a static site generator. I used React to build components and GraphQL to pull in data, and integrated it with Contentful a Headless CMS."
        slug="kodluyoruz"
      />
    </Section>
  )
}

export default ProjectTwo
