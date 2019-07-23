import React from "react"
import styled from "styled-components"
import { BlueBtn, colors } from "../../utils/styles"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  color: white;
  padding: 8px 16px;
  font-size: 0.9rem;
  min-width: 64px;
  box-sizing: border-box;
  min-height: 36px;
  font-family: Inconsolata, monospace;
  font-weight: 300;
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  color: ${props =>
    props.props.type === "blue" ? "while" : `${colors.textGray}`};
  background-image: ${props =>
    props.props.type === "blue" ? `${BlueBtn}` : "none"};
  background-color: ${props =>
    props.props.type === "blue" ? "none" : "white"};
  &:hover {
    background-color: ${props =>
      props.props.type === "blue" ? `${colors.lightBlue}` : `${colors.bgGray}`};
    background-image: none;
  }
  &:focus {
    outline: 0;
  }
`

export default Button
