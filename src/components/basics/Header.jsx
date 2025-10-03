"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 bg-background`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 md:px-4">
                {/* Logo */}
                <h1
                    className={`text-2xl font-bold transition-colors duration-300`}
                >
                    HarshTech
                </h1>

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
                </nav>

                {/* Mobile Nav Icon */}
                <div className="md:hidden text-white">
                    <Menu size={28} />
                </div>
            </div>
        </header>
    );
}
