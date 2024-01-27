import React from 'react'
import NavBar from './component/NavBar.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './component/Home.jsx'
import MySkills from './component/MySkills.jsx'
import AboutMe from './component/AboutMe.jsx'
import Projects from './component/Projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <AboutMe />
    <MySkills/>
    <Projects />
  </React.StrictMode>,
)
