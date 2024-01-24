import React from 'react'
import NavBar from './component/NavBar.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './component/Home.jsx'
import MySkills from './component/MySkills.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <MySkills/>
  </React.StrictMode>,
)
