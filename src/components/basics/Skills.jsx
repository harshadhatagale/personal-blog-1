"use client";

import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent>
              <CardTitle className="text-3xl mb-6 text-center">
                My Skills
              </CardTitle>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <motion.div
                        className="bg-blue-600 h-4 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
