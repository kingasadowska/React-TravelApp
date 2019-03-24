import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/DestinationListPage.css';

const destinations = ["Hawai", "Malta", "Norway"];

const DestinationListPage = () => {

    const list = destinations.map(destination => (
        <li key={destination}>
            <Link to= {`/destination/${destination}`}>{destination}</Link>
        </li>
    ))
    return (
        <div className="products">

        <h2> Choose destination</h2>
        <div>
            <ul> 
                {list}
            </ul>
        </div>
        </div>
    );
}

export default DestinationListPage;