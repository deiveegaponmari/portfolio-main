import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Skill/>
    <Certifications/>
    <Contact/>
    </>
  )
}

export default App
