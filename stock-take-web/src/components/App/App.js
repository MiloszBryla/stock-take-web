import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Cars from "../CRUD-menus/Cars";
import Users from "../CRUD-menus/Users";
import Reservations from "../CRUD-menus/Reservations";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/cars" component = {Cars}/>
                    <Route path="/users" component = {Users}/>
                    <Route path="/reservations" component = {Reservations}/>
                    <Route path="*" exact component = {LandingPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;