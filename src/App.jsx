import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import Home from './home'
import Education from './Education'
import Projects from './projects'
import Contact from './Contact'
import ScrollToTop from './ScrollToTop'
import Animation from './animation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Animation><Home/></Animation>
   <Animation> <Education/></Animation>
    <Animation><Projects/></Animation>
    <Contact/>
    <ScrollToTop/>




    
     </>
  )
}

export default App
