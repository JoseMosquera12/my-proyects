import {BrowserRouter, Routes, Route } from "react-router-dom" 
import Dashboards  from "./pages/Dashboard"
import Header from "./common/Header"
import AboutMe from "./pages/AboutMe"
import Proyects from "./pages/Proyects"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Dashboards />}/>
        <Route path="/sobre-mi" element={<AboutMe />}/>
        <Route path="/proyectos" element={<Proyects />}/>
        <Route path="/contacto" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
