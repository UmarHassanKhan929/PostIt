import Link from "next/link"
import Login from "./Login"
export default async function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <Link href={"/"}>
        <h1 className="text-white font-bold text-xl cursor-pointer">Post It</h1>
      </Link>
      <ul className="flex items-center">
        <Login />
      </ul>
    </nav>
  )
}
