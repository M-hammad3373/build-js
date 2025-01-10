export default function Footer() {
    return (
      <footer className="py-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Gen AI Engineer. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:text-neon-purple mx-2">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:text-neon-purple mx-2">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:text-neon-purple mx-2">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    )
  }
  