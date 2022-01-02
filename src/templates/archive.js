import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"

const archiveTemplate = ({
  pageContext: { currentPage, numPages, catName, catUri },
  data: {
    allWpPost: { nodes },
  },
}) => {
  return (
    <Layout>
      {catName && (
        <div className="text-sky-700 dark:text-sky-200 p-3 md:p-4 lg:p-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">
            {`Category: ${catName}`}
          </h1>
        </div>
      )}
      {numPages >= 1 && (
        <Pagination page={currentPage} totalPages={numPages} uri={catUri} />
      )}
    </Layout>
  )
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
