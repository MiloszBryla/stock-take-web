import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Cars from "../CRUD-menus/Cars";
import Users from "../CRUD-menus/Users";
import Reservations from "../CRUD-menus/Reservations";
import AddUser from "../CRUD-menus/AddUser";
import AddFile from "../CRUD-menus/AddFile";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/cars" component = {Cars}/>
                    <Route path="/users" component = {Users}/>
                    <Route path="/reservations" component = {Reservations}/>
                    <Route path="/add-user" exact component = {AddUser}/>
                    <Route path="/add-car" exact component = {AddFile}/>
                    <Route path="*" exact component = {LandingPage}/>

                </Switch>
            </div>
        </Router>
    );
}

export default App;