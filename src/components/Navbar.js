import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Headroom from "react-headroom"
import Logo from "./Logo"

export default function Navbar({ data }) {
  return (
    <Headroom
      className="shadow-sm dark:shadow-slate-700 relative"
      style={{ maxHeight: "72px" }}
    >
      <div className="flex justify-center items-center w-full">
        <Link
          to="/"
          className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 block"
        >
          <Logo />
        </Link>
        {/* <ul className="absolute flex justify-around gap-x-3 right-5 top-1/2 tranform -translate-y-1/2">
          <li>menu</li>
          <li>item</li>
        </ul> */}
      </div>
    </Headroom>
  )
}
