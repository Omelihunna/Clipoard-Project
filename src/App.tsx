// import { useState } from 'react'
import './App.css'
import Access from './components/Access'
import Certs from './components/Certifications'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Snippets from './components/Snippets'
import Supercharge from './components/Supercharge'

function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Snippets />
      <Features />
      <Access />
      <Supercharge />
      <Certs />
    </>
  )
}

export default App
