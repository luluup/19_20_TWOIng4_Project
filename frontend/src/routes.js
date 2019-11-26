
import React from 'react';

import { Route, Switch } from 'react-router-dom';

export default (props) => (

    <Switch>

        <Route path='/formulaire' exact component={Formulaire} />

    </Switch>

);