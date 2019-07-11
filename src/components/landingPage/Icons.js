import React, { Component } from "react"
import styled from "styled-components"
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from "react-icons/fi"

export default class Icons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FiLinkedin />,
        path: `https://www.linkedin.com/in/kapper/`,
      },
      {
        id: 2,
        icon: <FiGithub />,
        path: `https://github.com/dkapper01`,
      },
      {
        id: 3,
        icon: <FiTwitter />,
        path: `https://twitter.com/dkapper01`,
      },
      {
        id: 4,
        icon: <FiInstagram />,
        path: `https://www.instagram.com/dkapper01/`,
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a href="item.path" key={item.id} target="_blank">
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}
const IconWrapper = styled.div`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  word-spacing: 5px;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  width: 180px;
  a {
    color: white;
  }
  /* background-color: white; */
  /* color: black;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px,
      rgba(0, 0, 0, 0.14) 0px 10px 14px 1px,
      rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
    border-radius: 4px; */
`
