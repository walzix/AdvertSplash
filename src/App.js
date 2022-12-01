import React from 'react'
import "./App.css"
import { BrowserRouter , Route , Routes } from 'react-router-dom' 
import Navbar from './Components/NavBar/Navbar'
import Deshboard from './Pages/Deshboard/Deshboard'
import Users from './Pages/Users/Users'
import Sites from './Pages/Sites/Sites'
import Apps from './Pages/Apps/Apps'
import Statistics from './Pages/Statistics/Statistics'
import UploadReports from './Pages/UploadReports/UploadReports'
import UploadReportsApp from './Pages/UploadReportsApp/UploadReportsApp'
import DeleteReports from './Pages/DeleteReports/DeleteReports'
const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar>
<Routes>
  <Route path="/" element={<Deshboard/>}/>
  <Route path="/Users" element={<Users/>}/>
  <Route path="/Sites" element={<Sites/>}/>
  <Route path="/Apps" element={<Apps/>}/>
  <Route path="/Statistics" element={<Statistics/>}/>
  <Route path="/UploadReports" element={<UploadReports/>}/>
  <Route path="/UploadReportsApp" element={<UploadReportsApp/>}/>
  <Route path="/DeleteReports" element={<DeleteReports/>}/>
</Routes>
</Navbar>
</BrowserRouter>
    </>
  )
}

export default App