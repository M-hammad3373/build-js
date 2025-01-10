const skills = [
    'Machine Learning', 'Natural Language Processing', 'Computer Vision',
    'Deep Learning', 'Python', 'TensorFlow', 'PyTorch', 'GPT-3',
    'DALL-E', 'Reinforcement Learning', 'Data Analysis', 'Neural Networks'
  ]
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-700 px-4 py-2 rounded-full text-electric-blue hover:glow transition-all">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  