import React from "react";
import {Switch, Route} from 'react-router-dom';
import PokePic from './component/PokePic'
import pokemon from './component/pokemon'

export default (
    <Switch>
        <Route exact path="/" component={pokemon}/>
        <Route path="/pokemon/:name" component={PokePic}/>
    </Switch>
)