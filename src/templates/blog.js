import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const blogTemplate = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>BLOG</h1>
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
