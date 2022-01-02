import * as React from "react"
import { Link } from "gatsby"
import { HiArrowLeft, HiArrowRight } from "react-icons/hi"
import LinkButton from "./LinkButton"

export default function Pagination({ uri, page, totalPages }) {
  return (
    <div>
      <div className="mx-auto prose dark:prose-invert flex justify-center">
        <p className="text-xl mb-3 md:mb-4 lg:mb-6">
          Page {page} of {totalPages}
        </p>
      </div>
      <div className="flex justify-evenly ">
        {page === 1 ? null : (
          <LinkButton
            to={page === 2 ? `/blog${uri}` : `/blog${uri}${page - 1}`}
            internal={true}
          >
            <HiArrowLeft className="inline mr-1 md:mr-2 lg:mr-3" />
            Previous
          </LinkButton>
        )}
        {/* {page === 1 ? null : (
          <Link to={page === 2 ? `/blog${uri}` : `/blog${uri}${page - 1}`}>
            <HiArrowLeft className="inline" /> Previous
          </Link>
        )} */}
        {page === totalPages ? null : (
          <LinkButton to={`/blog${uri}${page + 1}`} internal={true}>
            Next
            <HiArrowRight className="inline ml-1 ml:mr-2 lg:ml-3" />
          </LinkButton>
        )}
      </div>
    </div>
  )
}
