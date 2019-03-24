import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage'
import DestinationPage from '../pages/DestinationPage';
import DestinationListPage from '../pages/DestinationListPage';
import PlanTripPage from '../pages/PlanTripPage';
import FeedbackPage from '../pages/FeedbackPage';
import ContactPage from '../pages/ContactPage';
import LogPage from '../pages/LogPage';
import RegisterPage from '../pages/RegisterPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/destinations" component= {DestinationListPage} />
                <Route path="/destination/:id" component= {DestinationPage} />
                <Route path="/trips" component={PlanTripPage} />
                <Route path="/feedback" component= {FeedbackPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/log" component={LogPage} />
                <Route path="/register" component={RegisterPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;