import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  color: rgba(0, 0, 0, 0.87);
  padding: 8px 16px;
  font-size: 0.9rem;
  min-width: 64px;
  box-sizing: border-box;
  min-height: 36px;
  /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
  font-family: Inconsolata, monospace;
  font-weight: 300;
  line-height: 1.5;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;

  /* background: ${props => props.props.background || "opacity:1;"}; */
  /* color: ${props => props.props.color || "rgba(0, 0, 0, 0.87)"}; */
  /* font-size: ${props => props.props.fontSize || "15px"}; */
  /* font-weight: ${props => props.props.fontWeight || "600"}; */
  /* border-radius: ${props => props.props.radius || "4px"}; */
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
    background-color: lightgray; 
  }
`

export default Button
