import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="container-fluid mt-5 bg-primary">
            <div className="row container  mx-auto pt-5 pb-2 text-dark">
                <div className="col-md-3 col-sm-12">
                    <h5>Orbit eye center</h5>
                    <div className="row">
                        <div className="col-12">
                            <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" className="img-fluid mt-3" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 me-md-2 me-lg-2">
                    <h6>Links</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-primary"><NavLink to="/aboutus" className="nav-link text-dark">About us</NavLink></li>
                        <li class="list-group-item bg-primary"><NavLink to="/contact" className="nav-link text-dark">Contact</NavLink></li>
                        <li class="list-group-item bg-primary"><NavLink to="/our-doctors" className="nav-link text-dark">Doctors</NavLink></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 ">
                    <div className="d-flex w-100">
                        <div className="justify-content-end">
                            <h5>Contact</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item text-dark bg-primary"><i class="bi bi-telephone-outbound"></i> 088 1836 5972</li>

                                <li class="list-group-item text-dark bg-primary"><i class="bi bi-envelope"></i> sappot@gmaial.com</li>

                                <li class="list-group-item text-dark bg-primary"> <i class="bi bi-geo-alt"></i> 66 broklyn golden street line New York, USA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h6 className="text-center mt-3">Copyright ?? 2020 by Orbit Eye center</h6>
            </div>
            
       </footer>
    );
};

export default Footer;