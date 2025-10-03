'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { Github, Menu, X } from 'lucide-react'

export default function Navbar() {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/timeline", label: "Timeline" }
    ]

    return (
        <>
            <nav className='flex bg-background border border-b-muted justify-between items-center h-16 px-4 md:px-6 relative'>
                {/* Logo */}
                <div>
                    <Link href={"/"} className='text-xl font-bold'>📚Smart Study Planner</Link>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex justify-center items-center gap-6'>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.label} 
                            href={link.href}
                            className='hover:text-primary transition-colors'
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href={"/"}>
                        <Button size={"icon"} variant={"outline"}>
                            <Github size={20} />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden flex items-center gap-2'>
                    <Link href={"/"} className='mr-2'>
                        <Button size={"icon"} variant={"outline"} className="h-9 w-9">
                            <Github size={16} />
                        </Button>
                    </Link>
                    <Button 
                        size={"icon"} 
                        variant={"outline"} 
                        onClick={toggleMenu}
                        className="h-9 w-9"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`
                    absolute top-16 left-0 w-full bg-background border-b border-muted
                    md:hidden transition-all duration-300 ease-in-out
                    ${isMenuOpen ? 'max-h-64 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
                    overflow-hidden
                `}>
                    <div className='flex flex-col p-4 space-y-4'>
                        {navLinks.map((link) => (
                            <Link 
                                key={link.label} 
                                href={link.href}
                                className='py-2 px-3 hover:bg-muted rounded-md transition-colors'
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button 
                            className={"w-full mt-2"} 
                            onClick={() => {
                                router.push("/dashboard")
                                closeMenu()
                            }}
                        >
                            Sign In
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 z-40 md:hidden"
                    onClick={closeMenu}
                />
            )}
        </>
    )
}