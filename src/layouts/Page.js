import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/HomePage'
import DestinationPage from '../pages/DestinationPage';
import PlanTripPage from '../pages/PlanTripPage';
import FeedbackPage from '../pages/FeedbackPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" component= {DestinationPage} />
                <Route path="/trips" component={PlanTripPage} />
                <Route path="/feedback" component= {FeedbackPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/" component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;