import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="container my-contsiner">
            <h4 className="mt-2 mb-4">Contact Us</h4>
            <div className="row pt-5">
                <div className="col-md-6 col-sm-12">
                    <h2 className="fs-1"><span className="color-reguler">We Love</span> To Hear From Our Customers</h2>
                    <ul class="list-group list-group-flush mt-5">
                        <li class="list-group-item d-flex">
                            <div className="contact-icon d-flex me-3">
                                 <i class="fas fa-phone-alt my-auto mx-auto fs-5"></i>
                            </div>
                            <div>
                                <h6 className="fs-4 text-secondary">666 888 0000</h6>
                                <h6 className="fs-4 text-secondary">92 666 8888 000</h6>
                            </div>
                        </li>
                        <li class="list-group-item d-flex">
                            <div className="contact-icon d-flex me-3">
                                 <i class="fas fa-envelope my-auto mx-auto fs-5"></i>
                            </div>
                            <div>
                                <h6 className="fs-4 text-secondary">needhelp@company.com</h6>
                                <h6 className="fs-4 text-secondary">info@company.com</h6>
                            </div>
                        </li>
                        <li class="list-group-item d-flex">
                            <div className="contact-icon d-flex me-3">
                                 <i class="fas fa-map-marker-alt my-auto mx-auto fs-5"></i>
                            </div>
                            <div>
                                <h6 className="fs-4 text-secondary">66 broklyn golden street line</h6>
                                <h6 className="fs-4 text-secondary">New York, USA</h6>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-sm-12 mt-4">
                    <div class="input-group mb-3 w-100">
                        <input type="text" class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3 w-100">
                        <input type="text" class="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3 w-100">
                        <input type="text" class="form-control" placeholder="Subject" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <textarea class="form-control" aria-label="With textarea" placeholder="Your Message"></textarea>
                    </div>
                    <button className="btn bg-color-reguler appoinment-btn text-light">Sent<i class="fas fa-share ms-2"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Contact;