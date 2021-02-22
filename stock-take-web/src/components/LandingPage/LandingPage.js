import React from 'react';
import {NavLink} from "react-router-dom";
import "../../styling/index.css"

function LandingPage() {
    return (
        <div>
            <div className={"title"}>Manage your company</div>
            <div className={"main-page"}></div>
            <div className={"links"}>
                <p><NavLink to={"/cars"} className={"link"}>CARS</NavLink></p>
                <p><NavLink to={"/users"} className={"link"}>USERS</NavLink></p>
                <p><NavLink to={"/reservations"} className={"link"}>RESERVATIONS</NavLink></p>
                <p><NavLink to={"/"} className={"link"}>YOUR ACCOUNT</NavLink></p>
                <p><NavLink to={"/"} className={"link"}>SUPPORT</NavLink></p>
            </div>
        </div>
    );
}

export default LandingPage;