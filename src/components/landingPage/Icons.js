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
            <a href={item.path} key={item.id} target="_blank">
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
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 180px;
  a {
    color: white;
  }
`
