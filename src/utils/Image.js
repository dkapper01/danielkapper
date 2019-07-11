import React from "react"
import styled from "styled-components"
// import Pic from "../gifs/kodluyoruz.gif"

const Image = ({ img }) => {
  // console.log(Pic)
  return <ImageWrapper src={img} />
}

export default Image

const ImageWrapper = styled.img`
  max-width: 100%;
  margin: 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px,
    rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
  border-radius: 4px;
`
