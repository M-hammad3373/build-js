import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Gen AI Engineer</h1>
          <p className="text-xl mb-6">Crafting intelligent solutions for tomorrows challenges</p>
          <a href="#contact" className="bg-electric-blue text-gray-900 px-6 py-3 rounded-full font-bold hover:glow transition-all">Get in Touch</a>
        </div>
        <div className="md:w-1/2">
          <Image src="/MicrosoftTeams-image.png" alt="AI Engineer" width={500} height={500} className="rounded-lg glow" />
        </div>
      </div>
    </section>
  )
}

