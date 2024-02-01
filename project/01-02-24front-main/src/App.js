import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Psignup from './components/Psignup/Psignup';
import Home1 from './components/Home/Home1';
import PetForm from './components/Admin/PetForm';
import PetV from './components/Admin/PetV';
import Adminlogin from './components/Admin/Adminlogin';
import AdminDash from './components/Admin/AdminDash';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Psignup />} />
        <Route path="/Addpet" element={<PetForm />} />
        <Route path="/adminlog" element={<Adminlogin />} />
        <Route path="/View" element={<PetV />} />
        <Route path="/Dash" element={<AdminDash />} />
      </Routes>
    </Router>
  );
}

export default App;
