import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const archiveTemplate = ({ data: { allWpPost } }) => {
  console.log(allWpPost)
  return <Layout>Archive</Layout>
}
export default archiveTemplate

export const archiveQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
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
