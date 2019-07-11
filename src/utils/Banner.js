import React from "react"
import styled from "styled-components"

const Banner = ({ title, subtitle }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </BannerWrapper>
  )
}

export default Banner
const BannerWrapper = styled.div`
  h1 {
    color: white !important;
  }
  p {
    color: white !important;
  }
`
