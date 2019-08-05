import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import Header from "../components/Header"
import Banner from "../utils/Banner"
import styled from "styled-components"
import Button from "../components/elements/button"
// import test from "../../content/projects/kodluyoruz/kodluyoruz.png"
import Img from "gatsby-image"

// import { rhythm, scale } from "../utils/typography"

class ProjectTemplate extends React.Component {
  render() {
    // const { location } = this.props
    console.log(this.props.markdownRemark)

    const project = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext
    // function goBack() {
    //   window.history.back()
    // }
    return (
      <Layout location={this.props.location} title={siteTitle}>
        {/* <SEO
          title={project.frontmatter.title}
          description={project.frontmatter.description || project.excerpt}
        /> */}
        <Header>
          <Banner title={project.frontmatter.title} subtitle="" />
        </Header>
        <ProjectWrapper>
          <Img
            fluid={project.frontmatter.picture.childImageSharp.fluid}
            alt="project"
            style={{ marginBottom: "2.5rem" }}
          />
          <div dangerouslySetInnerHTML={{ __html: project.html }} />
          <a
            href={project.frontmatter.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button marginBottom="2rem">
              {project.frontmatter.title}.com →
            </Button>
          </a>
        </ProjectWrapper>
      </Layout>
    )
  }
}

export default ProjectTemplate

const ProjectWrapper = styled.div`
  margin: 0 auto;
  width: 760px;
  li {
    margin: 0;
  }
`

export const pageQuery = graphql`
  query ProjectSlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        url
        picture {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
