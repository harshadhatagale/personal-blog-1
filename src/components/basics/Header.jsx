"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 bg-background`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 md:px-4">
                {/* Logo */}
                <Link
                    href={"/"}
                    className={`text-2xl font-bold transition-colors duration-300`}
                >
                    HarshTech
                </Link>

                {/* Desktop Nav */}
                <nav className="justify-center items-center hidden md:flex space-x-6">
                    <a
                        href="#about"
                        className={`transition-colors duration-300 `}
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className={`transition-colors duration-300`}
                    >
                        Skills
                    </a>
                    <a
                        href="#blog"
                        className={`transition-colors duration-300`}
                    >
                        Blog
                    </a>
                    <a
                        href="#contact"
                        className={`transition-colors duration-300`}
                    >
                        Contact
                    </a>

                    <Button variant="default" className="ml-4">
                        Subscribe
                    </Button>
                    <Link href={"https://github.com/harshadhatagale/personal-blog-1.git"}>
                        <Button variant={"outline"} size={"icon"}>
                            <Github />
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Nav Icon */}
                <div className="md:hidden text-white">
                    <Menu size={28} />
                </div>
            </div>
        </header>
    );
}
