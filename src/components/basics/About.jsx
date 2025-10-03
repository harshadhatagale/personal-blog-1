"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Profile Image with animation */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/79795999?v=4"
            alt="Harshad Hatagale"
            className="w-40 h-40 rounded-full border-4 border-blue-600 object-cover shadow-lg"
          />
        </motion.div>

        {/* About Card with slide-in animation */}
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent>
              <CardTitle className="text-3xl mb-4">About Me</CardTitle>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hi! I’m <strong>Harshad Hatagale</strong>, a passionate writer and developer. 
                I love creating engaging content, building modern web apps, and sharing knowledge 
                through my blog.  
              </p>

              {/* Skills with fade-up animation */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Blogging</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TailwindCSS</span>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
