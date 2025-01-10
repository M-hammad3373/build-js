import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-6">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">AI Engineer</Link>
        <ul className="flex space-x-6">
          <li><Link href="#projects" className="hover:text-electric-blue transition-colors">Projects</Link></li>
          <li><Link href="#skills" className="hover:text-neon-purple transition-colors">Skills</Link></li>
          <li><Link href="#contact" className="hover:text-bright-green transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

