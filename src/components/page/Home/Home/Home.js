import React from 'react';
import Services from '../../Shared/Services/Services';
import Appointment from '../Appointment/Appointment';
import HeroSection from '../HeroSection/HeroSection';
import './Home.css'
const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;