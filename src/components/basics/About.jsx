import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-4 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/79795999?v=4"  // add your profile image in /public folder
            alt="Harshad Hatagale"
            className="w-40 h-40 rounded-full border-4 border-blue-600 object-cover shadow-lg"
          />
        </div>

        {/* About Card */}
        <Card className="flex-1">
          <CardContent>
            <CardTitle className="text-3xl mb-4">About Me</CardTitle>
            <p className="text-gray-700 mb-4">
              Hi! I’m <strong>Harshad Hatagale</strong>, a passionate writer and developer. I love creating engaging content, building modern web apps, and sharing knowledge through my blog.  
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Blogging</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">TailwindCSS</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
