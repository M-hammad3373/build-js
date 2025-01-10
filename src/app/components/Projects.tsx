import Image from 'next/image'

const projects = [
  { id: 1, title: 'AI Chatbot', description: 'Developed an advanced AI chatbot using GPT-3', image: '/3.jpg' },
  { id: 2, title: 'Image Generator', description: 'Created an AI-powered image generator with DALL-E', image: '/img.jpg' },
  { id: 3, title: 'Predictive Analytics', description: 'Built a predictive analytics tool for business insights', image: '/images-3.jpg' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-700 rounded-lg overflow-hidden hover:glow transition-all">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
