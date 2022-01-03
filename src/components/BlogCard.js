import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function BlogCard({ data }) {
  console.log(data)
  return (
    <div className="max-w-xl mx-auto rounded border border-sky-700">
      {data.featuredImage && (
        <GatsbyImage
          image={getImage(
            data.featuredImage.node.localFile.childImageSharp.gatsbyImageData
          )}
          className="block mx-auto aspect-w-16 aspect-h-9"
        />
      )}
      <div className="p-3 md:p-4 lg:p-6">
        <h2 className="text-center text-2xl">{data.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.excerpt }}></p>
      </div>
    </div>
  )
}
