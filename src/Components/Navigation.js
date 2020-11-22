import React, { Component, Fragment } from 'react';
import Home from './Home';
import Welcome from './Welcome';
import {
    Switch,
     Route,
      Link ,
    } from 'react-router-dom';

class Navigation extends Component {
    render () {
        return (
            
            <Fragment>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/welcome"> Welcome Page !!</Link>
                    </li>
                </ul>

                <Switch>                    
                    <Route path="/welcome">
                      <Welcome></Welcome>
                    </Route>
                    <Route path="/">
                        <Home />    
                    </Route>
                </Switch>
            </Fragment>
           
            
        )
    }
}

export default Navigation;