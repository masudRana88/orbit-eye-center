import React from 'react';
import "./Spiner.css"
const Spiner = () => {
    return (
        <div className="container d-flex justify-content-center mt-5">
        <div class="scaling-squares-spinner" style={{spinnerStyle:"spinnerStyle"}}>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
        </div>
    </div>
            
    );
};

export default Spiner;