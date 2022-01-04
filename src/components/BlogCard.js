import * as React from "react"
import { Link, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function BlogCard({ data }) {
  return (
    <div className="w-full mx-auto rounded border border-sky-700 shadow shadow-sky-600 dark:shadow-sky-800">
      {data.featuredImage && (
        <div className="">
          <GatsbyImage
            image={getImage(
              data.featuredImage.node.localFile.childImageSharp.gatsbyImageData
            )}
            className="block mx-auto"
            alt=""
            onClick={() => {
              navigate(`/blog${data.uri}`)
            }}
          />
        </div>
      )}
      <div className="p-3 md:p-4 lg:p-6 ">
        <h2 className="text-center text-3xl font-bold mb-2">
          <Link
            to={`/blog${data.uri}`}
            className="no-underline hover:underline text-sky-700 dark:text-sky-300"
          >
            {data.title}
          </Link>
        </h2>
        <p className="text-center dark:text-sky-200 mb-2 md:mb-3 lg:mb-6">
          Published on {data.date}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: data.excerpt }}
          className="prose prose-sky md:prose-lg lg:prose-xl dark:prose-invert"
        ></div>
      </div>
    </div>
  )
}
