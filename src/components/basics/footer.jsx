'use client'

import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router= useRouter()
  return (
    <footer className="bg-background text-foreground py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Footer Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Harshad Hatagale</h2>
          <p className="text-muted-foreground">Writer & Developer | Sharing knowledge and stories online</p>
          <p className="text-muted-foreground mt-2">&copy; 2025 My Personal Blog. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <Button onClick={()=> router.push("https://github.com/harshadhatagale/")} variant="outline" className="flex items-center gap-2 text-black border-gray-500 hover:bg-blue-600 hover:border-blue-600">
            <Github /> GitHub
          </Button>
          <Button onClick={()=> router.push("https://www.linkedin.com/in/harshad-hatagale/")} variant="outline" className="flex items-center gap-2 text-black border-gray-500 hover:bg-blue-600 hover:border-blue-600">
            <Linkedin /> LinkedIn
          </Button>
          <Button onClick={()=> router.push("https://www.instagram.com/dashing_harsha_/")} variant="outline" className="flex items-center gap-2 text-black border-gray-500 hover:bg-blue-600 hover:border-blue-600">
            <Instagram /> Instagram
          </Button>
        </div>
      </div>
    </footer>
  );
}
