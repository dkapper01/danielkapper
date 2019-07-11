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
          {/* <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        > */}
          {/* {post.frontmatter.date}
        </p> */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {/* <hr
          style={{
            marginBottom: rhythm(1),
          }}
        /> */}

          {/* <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul> */}
        </ProjectWrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

const ProjectWrapper = styled.div`
  margin: 0 auto;
  width: 960px;
  .gatsby-resp-image-image {
    margin-top: -450px;
    z-index: 100;
  }
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
