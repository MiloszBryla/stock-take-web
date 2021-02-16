import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="*" component = {LandingPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;