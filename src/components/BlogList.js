import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default function BlogList() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
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
          <header>
            {posts.map(({ node }) => {
              return (
                <div>
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {" "}
                    <h2>{node.frontmatter.title}</h2>
                  </Link>

                  <p>
                    {node.frontmatter.date} {node.fields.readingTime.text}
                  </p>
                  <p>{node.excerpt}</p>
                </div>
              )
            })}
          </header>
        )
      }}
    />
  )
}
