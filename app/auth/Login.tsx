"use client"

import { signIn } from "next-auth/react"

export default function Login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login with Google
      </button>
    </li>
  )
}
