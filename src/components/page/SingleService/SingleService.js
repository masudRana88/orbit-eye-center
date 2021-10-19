import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../Hooks/useServices';

const SingleService = () => {
    const { serviceId } = useParams()
    const {services} = useServices()
    const curentSurvice = services.find(service => service.id == serviceId)
    console.log(curentSurvice)
    return (
        <div className="container ">
            <div className="row mt-5 mb-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={curentSurvice?.img} alt=""  className="img-fluid"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
                    <h2>{curentSurvice?.name}</h2>
                    <p>{curentSurvice?.discribtion}</p>
                    <button className="btn bg-color-reguler appoinment-btn mt-3 text-light">Book Appointment<i class="fas fa-notes-medical ms-2"></i></button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;