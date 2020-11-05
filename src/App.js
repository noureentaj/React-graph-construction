import React, { Component } from 'react';
import Graph from './Components/DraggableGraph'
import HomeScreen from './Components/HomeScreen'
import Preview from './Components/3D'
import { Route, Switch } from 'react-router-dom';


function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route path="/graph" component={Graph} />
                <Route path="/preview" component={Preview} />

            </Switch>
        </div>

    );
}

export default App;