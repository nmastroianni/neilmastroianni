import React from "react"

export default function Home() {
  return (
    <div className="min-h-screen mx-auto px-16 dark:bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-lg relative">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-300 dark:bg-stone-200 rounded-full mix-blend-multiply dark:mix-blend-overlay mix blur-xl opacity-70 dark:opacity-95 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-200 dark:bg-slate-100 rounded-full mix-blend-multiply dark:mix-blend-overlay blur-xl opacity-70 dark:opacity-95 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 dark:bg-gray-300 rounded-full mix-blend-multiply dark:mix-blend-overlay blur-xl opacity-70 dark:opacity-95 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          <div className="p-5 bg-white text-teal-800 dark:bg-slate-800 dark:text-slate-100 rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl">
                Neil Mastroianni
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
