import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../../Hooks/useServices';
import './Services.css'

const Services = () => {
    const { services } = useServices();
    return (
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h2 className="font-oswald fw-bold fs-1"><span className="color-reguler">Servises</span> We're Offering TO Our Clients</h2>
                </div>
            </div>
            {/* cards */}
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3  g-4 my-5">
                {
                    services.map(service => <div key={service.id} className="col my-card">
                    <div class="card shadow-sm">
                            <div className="card-image-bg card-img-top" style={{ backgroundImage: `url(${service.img})` }}>
                                <div className="card-image">
                                
                                </div>
                            </div>
                    <div class="card-body">
                        <h4 class="card-title">{service.name}</h4>
                        <p class="card-text">{service.discribtion.slice(0, 100)}...</p>
                        <Link to={`/services/${service.id}`}><button className="btn bg-color-reguler text-light">Details <i class="bi bi-chevron-compact-right"></i></button></Link>        
                    </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Services;