import React from 'react';
import {NavLink} from "react-router-dom";
import "../../styling/index.css"

function LandingPage() {
    return (
        <div>
            <div className={"title"}></div>
            <div className={"links"}>
                <p><NavLink to={"/cars"}>CARS</NavLink></p>
                <p><NavLink to={"/users"}>USERS</NavLink></p>
                <p><NavLink to={"/reservations"}>RESERVATIONS</NavLink></p>
            </div>
        </div>
    );
}

export default LandingPage;