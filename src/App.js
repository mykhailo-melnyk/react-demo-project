import React, {Component} from 'react';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import Login from "./containers/Login";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Registration from "./containers/Registration";
import requireLogin from './containers/Authenticated'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

const store = configureStore();


export default class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <Router basename="/">
                    <div>
                        <Switch>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/registration" exact component={Registration}/>
                            <Route component={NotFound}/>
                        </Switch>

                    </div>
                </Router>
            </Provider>
        );
    }
}