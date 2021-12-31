import React from "react"
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Home() {
  return (
    <div className="min-h-screen mx-auto px-16 dark:bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-lg relative">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-300 dark:bg-stone-200 rounded-full mix-blend-multiply dark:mix-blend-overlay mix blur-xl opacity-70 dark:opacity-95 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-200 dark:bg-slate-100 rounded-full mix-blend-multiply dark:mix-blend-overlay blur-xl opacity-70 dark:opacity-95 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 dark:bg-gray-300 rounded-full mix-blend-multiply dark:mix-blend-overlay blur-xl opacity-70 dark:opacity-95 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          <div className="p-5 bg-opacity-90 bg-white text-teal-800 dark:bg-slate-800 dark:text-sky-100 rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1 prose">
              <h1 className="text-center text-indigo-900 dark:text-white">
                Neil Mastroianni
              </h1>
            </div>
          </div>
          <div className="p-5 bg-opacity-95 bg-white text-indigo-800 dark:bg-slate-800 dark:text-sky-100 rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <header className="text-center font-semibold text-lg md:text-xl lg:text-2xl mb-3 md:mb-4 lg:mb-6">
                how to find me
              </header>
              <FaArrowDown className="mx-auto mb-4 md:mb-6 lg:mb-8 animate-bounce" />
              <ul className="grid grid-flow-col place-items-center">
                <li className="inline">
                  <a href="https://www.linkedin.com/in/nmastroianni/">
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                </li>
                <li className="inline">
                  <a href="https://github.com/nmastroianni">
                    <FaGithub className="w-8 h-8" />
                  </a>
                </li>
                <li className="inline">
                  <a href="https://twitter.com/nmastroianni">
                    <FaTwitter className="w-8 h-8" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
