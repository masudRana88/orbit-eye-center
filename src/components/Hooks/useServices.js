import react from "react";
import { useState } from "react";
import { useEffect } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/masudRana88/assignmentDB/master/orbit-eye-center/services.json')
            .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return {services}
}

export default useServices;