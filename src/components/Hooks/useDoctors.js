import { useEffect, useState } from "react"

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/masudRana88/assignmentDB/master/orbit-eye-center/doctors.json')
            .then(rsc => rsc.json())
            .then(data => setDoctors(data))
    },[])

    return {doctors}

}

export default useDoctors;