"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function PostTweetPage() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(
    e: React.SubmitEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await fetch("/api/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to create tweet")
      }

      router.push("/home")
      router.refresh()
    } catch (error) {
      console.log(error)
      alert("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
<main className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-100 to-yellow-100 p-6 md:p-10">
        {/* <nav className="mx-auto m-10 flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-white px-8 py-6 shadow-sm md:flex-row md:px-12">
        <div className="flex gap-8 text-xl font-medium text-blue-500 md:text-2xl">
          <Link className="hover:text-blue-600" href="/home">
            Home
          </Link>

          <Link className="hover:text-blue-600" href="/post-tweet">
            Post a Tweet
          </Link>
        </div>
      </nav> */}


      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl md:p-10">
        <Link
          href="/home"
          className="text-xl text-blue-600 hover:underline"
        >
          ← Back
        </Link>
          <h1 className="mt-8 text-4xl font-bold text-sky-500 md:text-5xl">
          Create Your Post
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Post"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full rounded-2xl border border-sky-200 bg-sky-50 p-5 text-xl text-gray-900 placeholder:text-gray-400 outline-none focus:border-sky-500 md:text-2xl" />
            
          <textarea
            placeholder="Share anything you want! Your thoughts, a joke, an update, or just say hi!"
            rows={8}
            value={body}
            onChange={(e) =>
              setBody(e.target.value)
            }
            className="w-full rounded-2xl border border-sky-200 bg-sky-50 p-5 text-xl text-gray-900 placeholder:text-gray-400 outline-none focus:border-sky-500 md:text-2xl" />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-sky-500 py-5 text-2xl font-bold text-white transition hover:bg-sky-600 disabled:opacity-50 md:text-3xl"
          >
            {loading
              ? "Posting..."
              : "Post Tweet"}
          </button>
        </form>
      </div>
    </main>
  )
}