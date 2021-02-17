import React, {useEffect, useState} from 'react';
import "../../styling/index.css"
import {NavLink} from "react-router-dom";

function Cars() {

    const [fetchedCars, setCars] = useState([]);

    const fetchCars = async () => {

        const response = await fetch(`http://localhost:8080/api/cars`,
            {
                method: 'GET',
            });
        const cars = await response.json();
        console.log(cars);
        setCars(cars);
    }

    useEffect(() => {fetchCars()}, []);

    return (
        <div>
            <span><NavLink to={"/"}>&lt; back</NavLink></span>
            <h4 className={"title"}>CARS</h4>
            <table className="cars-list">
                <tr>
                    <th>ID</th>
                    <th>MANUFACTURER</th>
                    <th>REGISTRATION</th>
                    <th>IS RENT</th>
                    <th>SERVICE</th>
                    <th>FUEL</th>
                </tr>
                {fetchedCars.map(theCar => (
                    <tr>
                        <td>{theCar.id}</td>
                        <td>{theCar.brandName}</td>
                        <td>{theCar.carId}</td>
                        <td>{theCar.rent}</td>
                        <td>{theCar.service}</td>
                        <td>{theCar.fuel}</td>
                    </tr>
                    ))}
            </table>
        </div>
    );
}

export default Cars;