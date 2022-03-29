import React, {useState} from 'react';
import MyNavbar from './components/navbar/MyNavbar';
import BrandIntro from './components/brandintro/BrandIntro';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppointmentForm from './components/appointmentform/AppointmentForm';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ConfirmationPage from './components/confirmationpage/ConfirmationPage';

import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
type FormData = {
  email: string;
  make: string;
  year: string;
  service:string[];
}

function App() {

  const [selectedService, setSelectedService] = useState("");
  const handleService = (temp: string) => {
    setSelectedService(temp);
    console.log("Current Service:", temp);
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const onSubmit = (data:object) => {
    setData(data);
    navigate("./confirmation");
};
  return (
    <div className="App">
      <MyNavbar handleService={handleService}></MyNavbar>
      <Routes>
        <Route path="/home" element={<BrandIntro />} />
        <Route path="/service/*" element={<AppointmentForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit}/>} />
        <Route path="/confirmation" element={<ConfirmationPage  data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
