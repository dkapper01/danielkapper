import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Banner from "../utils/Banner"
import styled from "styled-components"
// import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Header>
          <Banner title={post.frontmatter.title} subtitle="" />
        </Header>
        <ProjectWrapper>
          
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ProjectWrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

const ProjectWrapper = styled.div`
  margin: 0 auto;
  width: 960px;
`

export const pageQuery = graphql`
  query BlogPostBySlugs($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
