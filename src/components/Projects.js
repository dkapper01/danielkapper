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
        project="kodluyoruz"
        details="SNon esse minim dolore Lorem laborum. Lorem irure nulla amen commodo ad
          reprehenderit voluptate officia. Deserunt adipisicing laboris veniam."
        slug="kodluyoruz"
      />
    </Section>
  )
}

export default ProjectTwo
