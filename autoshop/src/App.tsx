import React, {useState} from 'react';
import MyNavbar from './components/navbar/MyNavbar';
import BrandIntro from './components/brandintro/BrandIntro';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentForm from './components/appointmentform/AppointmentForm';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const [selectedService, setSelectedService] = useState("");

  const handleService = (temp: string) => {
    setSelectedService(temp);
    console.log("Current Service:", temp);
  };

  return (
    <div className="App">
      <MyNavbar handleService={handleService}></MyNavbar>
      <Routes>
        <Route path="/home" element={<BrandIntro />} />
        <Route path="/service/*" element={<AppointmentForm  service={selectedService} handleService={handleService} />} />
      </Routes>
    </div>
  );
}

export default App;
