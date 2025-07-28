import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import type { Skill } from "@shared/schema";

export default function SkillsSection() {
  const { data: skills, isLoading } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
  });

  const technicalSkills = skills?.filter(skill => skill.category === "technical") || [];
  const tools = skills?.filter(skill => skill.category === "tool") || [];

  if (isLoading) {
    return (
      <section id="skills" className="py-20 bg-light-gray" aria-labelledby="skills-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="skills-heading" className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-8 w-48"></div>
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="h-8 bg-gray-300 rounded w-24"></div>
                ))}
              </div>
            </div>
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-8 w-48"></div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="bg-gray-300 rounded h-24"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="skills" className="py-20 bg-light-gray" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="skills-heading" className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-8">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <Badge
                  key={skill._id}
                  variant="secondary"
                  className="bg-white text-dark border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200 px-4 py-2 text-sm font-medium"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-8">
              Tools & Frameworks
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Card
                  key={tool._id}
                  className="text-center p-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-4">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 ${tool.color || 'bg-primary'} rounded-full flex items-center justify-center`}
                    >
                      <span className="text-white font-bold">{tool.icon || tool.name.charAt(0)}</span>
                    </div>
                    <p className="font-semibold text-dark">{tool.name}</p>
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
