import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import App from './App';

ReactDOM.render(
    <Router basename="/">
        <Switch>
            <Route exact path="/:itemId" component={App}/>
            <Route path="/" component={App}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
