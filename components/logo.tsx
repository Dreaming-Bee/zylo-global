import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-2xl font-serif font-bold">
        <span className="text-white">Zylo</span>
        <span className="text-gold">Global</span>
      </span>
    </Link>
  )
}

export default Logo
