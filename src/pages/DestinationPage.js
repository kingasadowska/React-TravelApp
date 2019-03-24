import React from 'react';
import {Link} from 'react-router-dom';
import Destination from '../components/Destination';
 
const DestinationPage = ({match}) => {
    
    return (
        <>
        <div> Selected destination</div>
        <Destination id={match.params.id}/>
        <Link to="/destinations"> Return back</Link>
        </>
    );
}

export default DestinationPage;
