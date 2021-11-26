import React from 'react';
import useDoctors from '../../Hooks/useDoctors';
import Spiner from '../Shared/Spiner/Spiner';
import './OurDoctors.css'
const OurDoctors = () => {
    const { doctors } = useDoctors()
    if (!doctors) {
        return (
            <div>
                <Spiner/>
            </div>
            
        )
    }
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h2 className="font-oswald fw-bold fs-1">Our <span className="color-reguler">Doctors</span></h2>
                </div>
            </div>
            {/* cards */}
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3  g-4 my-5">
                {
                    doctors.map(doctor => <div key={doctor.id} class="col my-card">
                    <div class="card">
                            <div className="card-image-bg card-img-top" style={{ backgroundImage: `url(${doctor.img})` }}>
                                <div className="card-image">
                                
                                </div>
                            </div>
                    <div class="card-body">
                        <h4 class="card-title">{doctor.name}</h4>
                        <div className="row">
                            <div className="col-6">
                              <a href="https://www.facebook.com/"><i class="bi bi-facebook social-icon ms-1 color-reguler"></i></a>
                              <a href="https://twitter.com/?lang=en"><i class="bi bi-twitter social-icon ms-2 color-reguler"></i></a>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <button className="btn fw-bold text-primary">Call Now <i class="bi bi-telephone"></i></button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default OurDoctors;