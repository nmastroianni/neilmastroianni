import * as React from "react"
import { Link, navigate, graphql } from "gatsby"
import Layout from "../components/Layout"
import BlogCard from "../components/BlogCard"

const blogTemplate = ({
  data: {
    allWpPost: { nodes },
  },
}) => {
  console.log(nodes)
  return (
    <Layout>
      <h1>BLOG</h1>
      <ul className="max-w-xl mx-auto flex flex-col gap-3">
        {nodes.length
          ? nodes.map(node => {
              return <BlogCard key={node.id} data={node} />
            })
          : ""}
      </ul>
    </Layout>
  )
}
export default blogTemplate

export const postQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpPost(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
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
        slug
        title
        uri
        isSticky
        id
      }
    }
  }
`
