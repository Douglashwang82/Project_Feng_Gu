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
import ThankYouPage from './components/thankyoupage/ThankYouPage';
import GooReviews from './components/gooreviews/GooReviews';
import { GoogleReview } from './components/googlereview/GoogleReview';
import Footer from './components/footer/Footer';
import AboutPage from './components/aboutpage/AboutPage';
import ContactPage from './components/contactpage/ContactPage';

type FormData = {
  AppointmentMake:string,
  AppointmentModel:string,
  AppointmentYear:string,
  AppointmentVIN:string,
  AppointmentEmail:string,
  AppointmentServices:string[],
}

function App() {

  const [selectedService, setSelectedService] = useState("");
  const handleService = (temp: string) => {
    setSelectedService(temp);
    console.log("Current Service:", temp);
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [data, setData] = useState<FormData>({AppointmentMake:"", AppointmentModel:"",AppointmentYear:"",AppointmentServices:["nothing"],AppointmentEmail:"",AppointmentVIN:""});
  const navigate = useNavigate();
  const onSubmit = (data:FormData) => {
    setData(data);
    navigate("./confirmation");
};
  return (
    <div className="App">
      <MyNavbar handleService={handleService}></MyNavbar>
      <Routes>
        <Route path="/home" element={<div><BrandIntro /><GoogleReview></GoogleReview></div>} />
        <Route path="/services/*" element={<AppointmentForm register={register} handleSubmit={handleSubmit} onSubmit={onSubmit}/> } />
        <Route path="/confirmation" element={<ConfirmationPage  data={data? data:[]}/>} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* <ThankYouPage></ThankYouPage> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
