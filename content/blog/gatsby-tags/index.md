---
title: Creating tags using GatsbyJS and GraphQL
date: "2019-07-01T22:12:03.284Z"
type: "post"
description: When building a blog it's nice to organize blog posts by category. That's where assigning tags to each post comes in handy. I think you should be able to assign multiple tags to each post because a post can cover a variety of topics. In this tutorial, we will go over how to add tags to your blog posts.
---

When building a blog it's nice to organize blog posts by category. That's where assigning tags to each post comes in handy. I think you should be able to assign multiple tags to each post because a post can cover a variety of topics. In this tutorial, we will go over how to add tags to your blog posts.

I am using GatsbyJS and a headless CMS called Contentful. GatsbyJS is a React-based, GraphQL powered static site generator good for building fast Progressive Web Apps and websites. Contentful is an API-first content management infrastructure to create, manage and distribute content.

Create a content model in Contentful with the content field of type Stort text and list. Restart your console and query the data in your graphql browser client. If that works type or copy and paste the query in you gatsby-node.js file.

```javascript
const { data } = await graphql(`
    query {
      bootcamps: allContentfulBootcamp {
        edges {
          node {
            slug
          }
        }
      }
`)
```

Since there can be multiple tags for each post you need to make sure you don't grab the same tag more than once. I chose to use JavaScripts Set function to pull out the unique values. Also, I used forEach to loop through the list to check if the value is an array and add to allTags variable.

```javascript
const tagging = data.tags.edges
// Build up list of unique tags
const allTags = new Set()
tagging.forEach(({ node }) => {
  const { tag } = node
  if (!Array.isArray(tag)) return
  tag.forEach(tags => allTags.add(tags))
})
```

Now you can use Gatsbys createPage api. The path will be the slug. The component will be the location of the template file and the context will props bing passed page template.

```javascript
allTags.forEach(tag => {
  createPage({
    path: `/tags/${tag}`,
    component: path.resolve("./src/templates/blog-tag-template.js"),
    context: {
      tag: tag,
    },
  })
})
```

```js
<StaticQuery
  query={graphql`
    query {
      getTags: allContentfulBlog {
        edges {
          node {
            tag
            slug
          }
        }
      }
    }
  `}
  render={data => {
    const tags = data.getTags.edges
    return (
      <div>
        {tags.map(({ node }, index) => {
          return <Link to={`/tab${node.tag}`}>{node.tag}</Link>
        })}
      </div>
    )
  }}
/>
```
