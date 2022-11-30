import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom' 
import Navbar from './Components/Navbar'
import Deshboard from './Components/Deshboard'
import Users from './Components/Users'
import Sites from './Components/Sites'
import Apps from './Components/Apps'
import Statistics from './Components/Statistics'
import UploadReports from './Components/UploadReports'
import UploadReportsApp from './Components/UploadReportsApp'
import DeleteReports from './Components/DeleteReports'
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