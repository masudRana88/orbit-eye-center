import React from 'react';
import { useParams } from 'react-router';

const ServicesDetails = () => {
    const { servicesId } = useParams()
    console.log(servicesId)
    return (
        <div>
            
        </div>
    );
};

export default ServicesDetails;