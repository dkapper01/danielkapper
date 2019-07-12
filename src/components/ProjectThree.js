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
        details="Non esse minim dolore Lorem laborum. Lorem irure nulla amet commodo ad
        reprehenderit voluptate officia. Deserunt adipisicing laboris veniam."
        slug="kappernator"
      />
    </Section>
  )
}

export default ProjectThree
