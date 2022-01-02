import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

export default function WpPost({ data }) {
  console.log(data)
  return (
    <Layout>
      <div className="prose dark:prose-invert">
        <h1>Post Title</h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
          className="prose prose-2xl dark:prose-invert"
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($id: String) {
    wpPost(id: { eq: $id }) {
      content
      slug
      title
      uri
    }
  }
`
