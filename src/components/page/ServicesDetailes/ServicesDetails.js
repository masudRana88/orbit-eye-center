import React from 'react';
import { useParams } from 'react-router';

const ServicesDetails = () => {
    const { services } = useParams();
    console.log(services)
    return (
        <div>
            
        </div>
    );
};

export default ServicesDetails;