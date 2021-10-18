import React from 'react';
import Services from '../../Shared/Services/Services';
import Appointment from '../Appointment/Appointment';
import Faqs from '../Faqs/Faqs';
import HeroSection from '../HeroSection/HeroSection';
import './Home.css'
const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Services></Services>
            <Appointment></Appointment>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;