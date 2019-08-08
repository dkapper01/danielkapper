const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // console.log(result.data.allMarkdownRemark.edges)
    const projects = result.data.allMarkdownRemark.edges

    result.data.allMarkdownRemark.edges.forEach(projects => {
      console.log(projects)
      createPage({
        path: `projects${projects.node.fields.slug}`,
        component: path.resolve("./src/templates/single-project.js"),
        context: {
          slug: projects.node.fields.slug,
        },
      })
    })
    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
