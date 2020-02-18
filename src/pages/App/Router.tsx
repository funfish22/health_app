import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from 'pages/default/Home';
import Favorite from 'pages/default/Favorite';
import PageNotFound from 'pages/default/PageNotFound';


function Router() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Favorite" component={Favorite} />

            <Route component={PageNotFound} />
        </Switch>
    )
}

export default Router;