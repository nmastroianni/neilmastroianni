const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // let's get all of the wordpress content types

  const postResult = await graphql(
    `
      {
        allWpPost(sort: { fields: date, order: DESC }) {
          nodes {
            date
            author {
              node {
                firstName
              }
            }
            excerpt
            featuredImage {
              node {
                altText
                srcSet
                localFile {
                  name
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            title
            uri
            isSticky
            id
          }
        }
        wp {
          readingSettings {
            postsPerPage
          }
        }
      }
    `
  )
  if (postResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const categoryResult = await graphql(
    `
      {
        allWpCategory {
          nodes {
            uri
            name
            description
            count
            id
            slug
          }
        }
        wp {
          readingSettings {
            postsPerPage
          }
        }
      }
    `
  )
  if (categoryResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // define templates

  const archiveTemplate = path.resolve("./src/templates/archive.js")
  const blogTemplate = path.resolve("./src/templates/blog.js")

  // create pages for the blog
  const posts = postResult.data.allWpPost.nodes
  const blogPostsPerPage = postResult.data.wp.readingSettings.postsPerPage
  const numBlogPages = Math.ceil(posts.length / blogPostsPerPage)
  Array.from({ length: numBlogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: blogTemplate,
      context: {
        totalPosts: posts.length,
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numPages: numBlogPages,
        currentPage: i + 1,
        basePath: "/blog",
      },
    })
  })

  // create pages for each category
  categoryResult.data.allWpCategory.nodes.forEach(category => {
    const postsPerPage = categoryResult.data.wp.readingSettings.postsPerPage
    console.log("^*^*^*^*", postsPerPage)
    const numberOfPosts = category.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)
    // some categories may be empty
    // don't create archive for uncategorized
    if (numberOfPosts > 0 || category.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path:
            i === 0 ? `/blog${category.uri}` : `/blog${category.uri}${i + 1}`,
          component: archiveTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            catId: category.id,
            catName: category.name,
            catUri: category.uri,
            categories: categoryResult.data.allWpCategory,
          },
        })
      })
    }
  })
}
