import React, { Component } from 'react';
import Graph from './Components/DraggableGraph'
import Preview from './Components/Preview'
import HomeScreen from './Components/HomeScreen'
import {Carou} from './Components/Carou'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Switch } from 'react-router-dom';


function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/build" component={HomeScreen} />
                <Route path="/graph" component={Graph} />
                <Route path="/preview" component={Preview} />
                <Route path="/album" component={Carou} />

            </Switch>
        </div>

    );
}

export default App;