import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const permission=false;

const LogPage = () => {
    return (
        <Route render = {() => (
            permission ? (<h3> Twoj Profil </h3>) : (
                <Redirect to="/register" />
            )
        )}/>
  
    );
}
export default LogPage;
