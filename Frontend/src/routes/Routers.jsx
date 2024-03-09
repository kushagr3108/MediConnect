import React from 'react';
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Contact from "../pages/Contact.jsx";
import Doctors from "../pages/Doctor/Doctors.jsx";
import DoctorDetails from "../pages/Doctor/DoctorDetails.jsx";

import {Routes, Route} from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:id' element={<DoctorDetails />} />

    </Routes>
  )

}

export default Routers