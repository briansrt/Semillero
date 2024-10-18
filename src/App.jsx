import './App.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login'
import SignupPage from './Components/Signup'
import AiVideoDashboard from './Components/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  return (  
    <BrowserRouter>
      {/* <Navigation/> */}
      <Routes>
        <Route index element={<Login callback={setUser}/>}></Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Dashboard" element={<AiVideoDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
