"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-background text-foreground py-12 mt-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl font-bold mb-2">Harshad Hatagale</h2>
          <p className="text-muted-foreground">
            Writer & Developer | Sharing knowledge and stories online
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            &copy; 2025 My Personal Blog. All rights reserved.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => router.push("https://github.com/harshadhatagale/")}
              variant="outline"
              className="flex items-center gap-2 text-black border-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              <Github size={18} /> GitHub
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() =>
                router.push("https://www.linkedin.com/in/harshad-hatagale/")
              }
              variant="outline"
              className="flex items-center gap-2 text-black border-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              <Linkedin size={18} /> LinkedIn
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() =>
                router.push("https://www.instagram.com/dashing_harsha_/")
              }
              variant="outline"
              className="flex items-center gap-2 text-black border-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              <Instagram size={18} /> Instagram
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
