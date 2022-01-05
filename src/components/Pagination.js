import * as React from "react"
import { Link } from "gatsby"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi"
import LinkButton from "./LinkButton"

export default function Pagination({ uri, page, totalPages }) {
  return (
    <div>
      {totalPages > 1 && (
        <div className="mx-auto prose dark:prose-invert flex justify-center">
          <p className="text-xl mb-3 md:mb-4 lg:mb-6">
            Page {page} of {totalPages}
          </p>
        </div>
      )}
      <div className="flex justify-evenly ">
        {page === 1 ? null : (
          <LinkButton
            to={
              page === 2
                ? uri
                  ? `/blog${uri}`
                  : `/blog/`
                : uri
                ? `/blog${uri}${page - 1}`
                : `/blog/${page - 1}`
            }
            internal={true}
          >
            <HiArrowLeft className="inline mr-1 md:mr-2 lg:mr-3" />
            Previous
          </LinkButton>
        )}
        {page === totalPages ? null : (
          <LinkButton
            to={uri ? `/blog${uri}${page + 1}` : `/blog/${page + 1}`}
            internal={true}
          >
            Next
            <HiArrowRight className="inline ml-1 ml:mr-2 lg:ml-3" />
          </LinkButton>
        )}
      </div>
    </div>
  )
}
