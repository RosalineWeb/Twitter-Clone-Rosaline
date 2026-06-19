"use client"

import Link from "next/link"
import LogoutButton from "./LogoutButton"

export default function HomeNavbar() {
  return (
    <nav className="mx-auto my-6 flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-white px-6 py-5 shadow-sm md:flex-row md:px-10">
      <Link
        href="/home"
        className="group flex items-center gap-3"
      >
        <span className="text-4xl transition duration-300 group-hover:-translate-y-1 group-hover:rotate-12">
          🕊️
        </span>

        <h1 className="text-3xl font-bold text-blue-600 transition duration-300 group-hover:text-blue-500 md:text-4xl">
          Let&apos;s post something! 🚀
        </h1>
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-4 text-lg font-medium text-blue-500 md:text-xl">
        <Link
          href="/home"
          className="rounded-2xl px-5 py-3 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
        >
          Main
        </Link>

        <Link
          href="/post-tweet"
          className="rounded-2xl px-5 py-3 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
        >
          Post 
        </Link>
        <Link
          href="/profile"
          className="rounded-2xl px-5 py-3 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
        >
          Profile
        </Link>
        <LogoutButton />
      </div>
    </nav>
  )
}