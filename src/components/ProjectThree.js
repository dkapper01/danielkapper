import React from "react"
import Pic from "../gifs/kappernator.gif"
import Image from "../utils/Image"
import Section from "../utils/Section"
import Info from "../utils/Info"

const ProjectThree = () => {
  return (
    <Section>
      <Image img={Pic} />
      <Info
        project="Kappernator"
        details="Built a data entry application for TitanHouse using Node.js, Express, Mongoose, Pug and MongoDB. It replaced the company’s reliance on Google Sheets and Forms."
        slug="kappernator"
      />
    </Section>
  )
}

export default ProjectThree
