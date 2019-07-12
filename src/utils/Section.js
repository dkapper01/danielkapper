import styled from "styled-components"

const Section = styled.section`
  max-width: 1280px;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 30px;
  margin: 0 auto;
  @media (min-width: 1000px) {
    margin: 0 auto;
    padding: 0 60px 80px 60px;
    display: grid;
    grid-template-columns: 65% repeat(1, 1fr);
    grid-column-gap: 40px;
  }
`
export default Section
