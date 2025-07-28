export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a keen eye for detail and a drive for
            continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 5 years of experience in full-stack development, I
              specialize in building scalable web applications using modern
              technologies. My journey began with a computer science degree and
              has evolved through various challenging projects and
              collaborations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I thrive in collaborative environments and enjoy mentoring junior
              developers. When I'm not coding, you'll find me exploring new
              technologies, contributing to open-source projects, or sharing
              knowledge through technical writing.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-light-gray rounded-xl">
                <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
                <p className="text-gray-600 font-medium">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-light-gray rounded-xl">
                <h4 className="text-3xl font-bold text-primary mb-2">5+</h4>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Modern developer workspace"
              className="rounded-2xl shadow-xl w-full max-w-md h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
