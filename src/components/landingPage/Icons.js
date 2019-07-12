import React, { Component } from "react"
import styled from "styled-components"
import {
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiFileText,
} from "react-icons/fi"

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
      {
        id: 5,
        icon: <FiFileText />,
        path: `https://danielkapper.com/daniel_kapper_resume.pdf`,
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
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
  /* margin-bottom: 0.5rem; */
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 210px;
  a {
    color: white;
  }
`
