import * as React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children, path }) {
  return (
    <div className="relative">
      <ul id="nav-access" className="relative mx-auto">
        <li>
          <a
            href="#main-content"
            className="absolute z-50 -top-20 sm:left-1/4 text-2xl  inline-block w-full sm:w-1/2 text-center bg-gray-900 bg-opacity-30 transform focus:translate-y-20 transition-all duration-500 ease-in-out"
          >
            Skip to main content{" "}
            <span className="text-gray-800 px-3 py-0  text-base rounded-sm">
              Return
            </span>
          </a>
        </li>
      </ul>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
        <header className="">
          <Navbar />
        </header>
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
