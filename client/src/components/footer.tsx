import { Button } from "@/components/ui/button";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Alex Johnson</h3>
            <p className="text-gray-300 mb-4">
              Full-Stack Developer passionate about creating exceptional digital
              experiences.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="link"
                onClick={() => window.open("#", "_blank")}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-0"
              >
                LinkedIn
              </Button>
              <Button
                variant="link"
                onClick={() => window.open("#", "_blank")}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-0"
              >
                GitHub
              </Button>
              <Button
                variant="link"
                onClick={() => window.open("#", "_blank")}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-0"
              >
                Twitter
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Button
                variant="link"
                onClick={() => handleNavClick("#home")}
                className="block text-gray-300 hover:text-white transition-colors duration-200 p-0 h-auto"
              >
                Home
              </Button>
              <Button
                variant="link"
                onClick={() => handleNavClick("#about")}
                className="block text-gray-300 hover:text-white transition-colors duration-200 p-0 h-auto"
              >
                About
              </Button>
              <Button
                variant="link"
                onClick={() => handleNavClick("#projects")}
                className="block text-gray-300 hover:text-white transition-colors duration-200 p-0 h-auto"
              >
                Projects
              </Button>
              <Button
                variant="link"
                onClick={() => handleNavClick("#blog")}
                className="block text-gray-300 hover:text-white transition-colors duration-200 p-0 h-auto"
              >
                Blog
              </Button>
              <Button
                variant="link"
                onClick={() => handleNavClick("#contact")}
                className="block text-gray-300 hover:text-white transition-colors duration-200 p-0 h-auto"
              >
                Contact
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-gray-300">
              <p>Web Development</p>
              <p>Mobile Apps</p>
              <p>UI/UX Design</p>
              <p>Consulting</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Alex Johnson. All rights reserved. Built with ❤️ and modern
            web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
