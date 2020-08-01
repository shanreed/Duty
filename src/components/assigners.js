import React, {useEffect, useState} from 'react';
import axios from "axios";
import CityCard from './CityCard'
const Assigners = () => {

   const [assigners, setAssigners] = useState([]);
    
    useEffect(() => {
        
        axios
        .get('https://dutyapi.herokuapp.com/duty/assigners')
        .then(res => { 
            console.log(res);
            setAssigners(res.data);
        })
    
        .catch(error => ('server error', error));

    
        
    },[]);

return (

    <div>
        {assigners.map(assigner => (
            {username}
            // <AssignerCard key={assigner.id} assigners={assigner} />
        ))}
    </div>
)
}

export default Assigners;