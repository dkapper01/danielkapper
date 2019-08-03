import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

export default function BlogList() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC },
            filter: { frontmatter: { type: { eq: "post" } } }
          ) {
            edges {
              node {
                excerpt
                fields {
                  slug
                  readingTime {
                    text
                  }
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  description
                }
              }
            }
          }
        }
      `}
      render={data => {
        const posts = data.allMarkdownRemark.edges
        return (
          <BlogListWrapper>
            <h1>
              My Blog{" "}
              <span role="img" aria-label="hammer">
                🔥
              </span>
            </h1>
            {posts.map(({ node }, index) => {
              return (
                <div key={index}>
                  <Link
                    style={{ boxShadow: `none`, textDecoration: `underline` }}
                    to={`blog${node.fields.slug}`}
                  >
                    <h2>{node.frontmatter.title}</h2>
                  </Link>

                  <p style={{ color: `black`, marginTop: `-15px` }}>
                    {node.frontmatter.date} {node.fields.readingTime.text}
                  </p>
                  <p>{node.excerpt}</p>
                </div>
              )
            })}
          </BlogListWrapper>
        )
      }}
    />
  )
}

const BlogListWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto 5rem auto;
  padding: 0 60px;
  border-top: 1px solid lightgray;
  h1 {
    text-align: center;
  }
  h2 {
    color: #3f51b5;
  }
  p {
    margin: 0;
  }
`
