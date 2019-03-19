import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "../styles/Header.css";

import img1 from '../images/6.jpg';
import img2 from '../images/7.jpg';
import img3 from '../images/8.jpg';
import img4 from '../images/12.jpg';
import img5 from '../images/11.jpg';



const Header = () => {
    return (
        <>
        <Switch>
            <Route path="/" exact render={() => (
                <img src={img1} alt="miasto" />
            )} />
            <Route path="/products" render={() => (
                <img src={img2} alt="miasto" />
            )} />
            <Route path="/trips" render={() => (
                <img src={img3} alt="miasto" />
            )} />
            <Route path="/feedback" render={() => (
                <img src={img4} alt="miasto" />
            )} />
            <Route path="/contact" render={() => (
                <img src={img5} alt="miasto" />
            )} />
            <Route render={() => (
                <img src={img1} alt="miasto" />
            )} />
        </Switch>
    </>
    );
}

export default Header;