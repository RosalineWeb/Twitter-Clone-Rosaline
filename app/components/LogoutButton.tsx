"use client"

import { useRouter } from "next/navigation"

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    })

    router.push("/")
    router.refresh()
  }

  return (
     <button
      onClick={handleLogout}
      className="rounded-2xl bg-sky-500 px-5 py-3 text-lg font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-md md:text-xl"
    >
      Signout
    </button>
  )
}