import React from "react"
import { Link } from "gatsby"

export default function LinkButton({ to, children, internal }) {
  return (
    <>
      {internal ? (
        <Link
          to={to}
          className="bg-sky-700 dark:bg-slate-800 transition duration-300 ease-in-out hover:bg-sky-900 hover:dark:bg-slate-700 hover:shadow-md hover:shadow-sky-800 hover:dark:shadow-sky-8f00 text-white dark:text-sky-100 hover:text-sky-50 hover:dark:text-sky-50 dark:border dark:border-sky-900 hover:border-sky-700 rounded px-4 py-3"
        >
          {children}
        </Link>
      ) : (
        <a href={to}>{children}</a>
      )}
    </>
  )
}
