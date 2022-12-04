import React from 'react'
import "./App.css"
import { BrowserRouter } from 'react-router-dom' 
import Navbar from './Components/NavBar/Navbar'
import AnimatedRoutes from "../src/Components/AnimateRoutes/AnimatedRoutes"
const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar>
<AnimatedRoutes />
</Navbar>
</BrowserRouter>
    </>
  )
}

export default App