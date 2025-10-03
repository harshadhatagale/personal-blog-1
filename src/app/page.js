import About from '@/components/basics/About'
import Blog from '@/components/basics/Blog'
import Contact from '@/components/basics/Contact'
import Footer from '@/components/basics/footer'
import Header from '@/components/basics/Header'
import Skills from '@/components/basics/Skills'
import React from 'react'

export default function page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <About />
        <Skills />
        <Blog />
        <Contact/>
        <Footer />
      </main>
    </>
  )
}
