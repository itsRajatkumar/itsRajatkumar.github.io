import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = () => {
    // In a real implementation, this would link to the actual resume
    window.open("#", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-gray to-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <header className="animate-slide-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Alex Johnson</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-600 mb-4 font-light">
              Full-Stack Developer | Problem Solver
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              I craft exceptional digital experiences through clean code and
              innovative solutions. Passionate about building scalable web
              applications that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleContactClick}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Contact Me
              </Button>
              {/* <Button
                variant="outline"
                onClick={handleResumeClick}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Download Resume
              </Button> */}
            </div>
          </header>
          <div className="flex justify-center lg:justify-end animate-float">
            <img
              src="/assets/dev-image.jpg"
              alt="Alex Johnson - Professional headshot of a full-stack developer"
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-8 border-white"
              loading="eager"
              width="384"
              height="384"
            />
          </div>
        </div>
      </div>
    </section>
  );
}