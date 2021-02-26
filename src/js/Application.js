import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from './Routes';

const Application = () => {
    return (
        <React.Fragment>
                <React.Suspense fallback="Загрузка...">
                    <Switch>
                        { Routes.map(( route ) => <Route {...route} key={route.path}/>) }
                    </Switch>
                </React.Suspense>
        </React.Fragment>
    );
};

export default Application;