import React from "react"
import styled from "styled-components"

const Banner = ({ name, title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <p>{name}</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </BannerWrapper>
  )
}

export default Banner
const BannerWrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  /* padding: 0 60px; */
  h1 {
    color: white !important;
  }
  p {
    color: white !important;
  }
`
