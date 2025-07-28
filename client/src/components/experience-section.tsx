import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Experience } from "@shared/schema";

export default function ExperienceSection() {
  const { data: experiences, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  const workExperiences = experiences?.filter(exp => exp.type === "work") || [];
  const educationExperiences = experiences?.filter(exp => exp.type === "education") || [];

  if (isLoading) {
    return (
      <section id="experience" className="py-20 bg-white" aria-labelledby="experience-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="experience-heading" className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey and key milestones
            </p>
          </div>
          <div className="max-w-4xl mx-auto animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="relative flex items-center mb-12">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="ml-8 bg-gray-300 rounded h-32 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="experience" className="py-20 bg-white" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="experience-heading" className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and key milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary"></div>

            {workExperiences.map((experience, index) => (
              <div
                key={experience._id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:pl-8">
                  <Card className="bg-light-gray shadow-lg">
                    <CardContent className="p-6">
                      <span className="text-sm text-accent font-semibold">
                        {experience.period}
                      </span>
                      <h3 className="text-xl font-bold text-dark mt-2 mb-2">
                        {experience.title}
                      </h3>
                      <h4 className="text-primary font-semibold mb-3">
                        {experience.company}
                      </h4>
                      <p className="text-gray-600">{experience.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-dark mb-8 text-center">
              Education & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationExperiences.map((item, index) => (
                <Card key={index} className="bg-light-gray shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-dark mb-2">
                      {item.title}
                    </h4>
                    <p className="text-primary font-semibold mb-2">
                      {item.company}
                    </p>
                    <p className="text-gray-600">{item.period}</p>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
