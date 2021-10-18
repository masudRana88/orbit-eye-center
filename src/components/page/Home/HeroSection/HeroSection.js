import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="d-block w-100 he-img-1">
                        <div className="hero-contant font-georama">
                            <h1 className="mb-3">We bring therir world into Focuse</h1>
                            <button className="btn bg-color-reguler text-light">Book Appoinment</button>
                        </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="d-block w-100 he-img-2">
                      <div className="hero-contant font-georama">
                            <h1 className="mb-3">Orbit Here to Help yoy see Better</h1>
                            <button className="btn bg-color-reguler text-light">Book Appoinment</button>
                        </div>  
                </div>
            </div>
            <div class="carousel-item">
                <div class="d-block w-100 he-img-3">
                     <div className="hero-contant font-georama">
                            <h1 className="mb-3">Optometrst 	&amp; eyes car specilist</h1>
                            <button className="btn bg-color-reguler text-light">Book Appoinment</button>
                    </div>   
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    );
};

export default HeroSection;