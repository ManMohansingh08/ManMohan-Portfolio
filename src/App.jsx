import { Routes, Route } from 'react-router-dom'
import NavBar from "./Components/Navbar/NavBar"
import Home from  "./Components/Home/Home"
import AboutUs from './Components/About/AboutUs';
import Skill from './Components/Skills/Skill';
import Project from './Components/Project/Project';


const App = () => {
  return (
    <main className="w-full bg-slate-700 h-auto">

      <NavBar />
      <Home/>
     <AboutUs/>
     <Skill/>
     <Project />
    </main>
  )
};

export default App
