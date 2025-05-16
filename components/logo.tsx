import Link from "next/link"

const Logo = () => {
  // Get the basePath from the environment or use a default for GitHub Pages
  const basePath = process.env.NODE_ENV === 'production' ? '/zylo-global' : '';

  return (
    <Link href={`${basePath}/`} className="flex items-center">
      <span className="text-2xl font-serif font-bold">
        <span className="text-white">Zylo</span>
        <span className="text-gold">Global</span>
      </span>
    </Link>
  )
}

export default Logo
