import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Code, Smartphone, Bot, Database, Globe } from "lucide-react";
import type { Service } from "@shared/schema";

const iconMap = {
  "code": Code,
  "smartphone": Smartphone,
  "bot": Bot,
  "database": Database,
  "globe": Globe,
  "message": MessageCircle,
};

export default function ServicesSection() {
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Services I Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to bring your digital ideas to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-light-gray rounded-2xl p-8 animate-pulse">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-4"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-3 bg-gray-300 rounded"></div>
                  <div className="h-3 bg-gray-300 rounded"></div>
                  <div className="h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="h-6 w-16 bg-gray-300 rounded"></div>
                  <div className="h-6 w-20 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            Services I Provide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to bring your digital ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code;
            return (
              <div
                key={service._id}
                className="bg-light-gray rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">What you get:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {service.price && (
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                )}

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => {
                    // Scroll to contact section
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-light-gray rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-4">Need Something Custom?</h3>
            <p className="text-gray-600 mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs and budget.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Let's Talk About Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}