import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function BlogCard({ data }) {
  return (
    <div className="max-w-xl mx-auto rounded border border-sky-700">
      {data.featuredImage && (
        <div className="">
          <GatsbyImage
            image={getImage(
              data.featuredImage.node.localFile.childImageSharp.gatsbyImageData
            )}
            className="block mx-auto"
            alt=""
          />
        </div>
      )}
      <div className="p-3 md:p-4 lg:p-6 prose prose-sky md:prose-lg">
        <h2 className="text-center text-2xl">{data.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.excerpt }}></div>
      </div>
    </div>
  )
}
