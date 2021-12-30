import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function WpPage({ data }) {
  const {
    wpPage: { content, title },
  } = data
  return (
    <Layout>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose prose-lg md:prose-xl lg:prose-2xl"
      />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    wpPage(id: { eq: $id }) {
      content
      title
      uri
    }
  }
`
