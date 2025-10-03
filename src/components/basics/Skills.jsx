import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Skills() {
  const skills = [
    { name: "Next.js", level: 90 },
    { name: "React", level: 85 },
    { name: "TailwindCSS", level: 80 },
    { name: "Blogging", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 70 },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <Card>
          <CardContent>
            <CardTitle className="text-3xl mb-6 text-center">My Skills</CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
