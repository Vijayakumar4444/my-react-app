import { useState } from 'react'
import NavBar from './components/navbar'
import Home from './pages/homepage/home'
import Joblist from './pages/joblist/Joblist'
import { Routes, Route } from "react-router-dom"
import './App.css'
import JobPage from './pages/jobpage/Jobpage'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>

      <Route path="/" element={<Home />} />

       <Route path="/jobs" element={<Joblist />} />
       
       <Route path="/filterjobs" element={<JobPage />} />

     </Routes>
   // <div>
    //  <JobPage />
    //</div>
  )
}

export default App
