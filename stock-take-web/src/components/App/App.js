import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Cars from "../CRUD-menus/Car/Cars";
import Users from "../CRUD-menus/User/Users";
import Reservations from "../CRUD-menus/Reservation/Reservations";
import AddUser from "../CRUD-menus/User/AddUser";
import AddCar from "../CRUD-menus/Car/AddCar";
import AddReservation from "../CRUD-menus/Reservation/AddReservation";
import EditCar from "../CRUD-menus/Car/EditCar";
import EditUser from "../CRUD-menus/User/EditUser";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/cars" component = {Cars}/>
                    <Route path="/users" component = {Users}/>
                    <Route path="/reservations" component = {Reservations}/>
                    <Route path="/add-user" exact component = {AddUser}/>
                    <Route path="/add-car" exact component = {AddCar}/>
                    <Route path="/edit-car/:id" exact component = {EditCar}/>
                    <Route path="/edit-user/:id" exact component = {EditUser}/>
                    <Route path="/add-reservation" exact component = {AddReservation}/>


                    <Route path="*" exact component = {LandingPage}/>

                </Switch>
            </div>
        </Router>
    );
}

export default App;