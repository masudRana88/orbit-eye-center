import React from 'react';
import './Appointment.css'
const Appointment = () => {
    return (
        <div className="container-fluid appoinment-container mt-5">
            <div className="hero-contant">
                <h2 className="font-oswald fw-bold fs-1"><span className="color-reguler">For A Clear</span> Tomorrow, Bring<br />Their World into Focus</h2>
                <button className="btn bg-color-reguler appoinment-btn mt-3 text-light">Book Appointment<i class="fas fa-notes-medical ms-2"></i></button>
            </div>
        </div>
    );
};

export default Appointment;