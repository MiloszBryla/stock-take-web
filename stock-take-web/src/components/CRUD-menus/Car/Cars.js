import React, {useEffect, useState} from 'react';
import "../../../styling/index.css"
import {Link, NavLink} from "react-router-dom";
import {Button, ButtonGroup} from "reactstrap";

function Cars() {

    const [fetchedCars, setCars] = useState([]);

    const fetchCars = async () => {
        const response = await fetch(`http://localhost:8080/api/cars`,
            {
                method: 'GET',
            });
        const cars = await response.json();
        setCars(cars);
    }
    async function remove(id) {
        await fetch(`http://localhost:8080/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    }

    const refreshPage = ()=>{
        window.location.reload();
    }



    useEffect(() => {fetchCars()}, []);

    return (
        <div>
            <span><NavLink to={"/"} className={"previous"}>&laquo; Back</NavLink></span>
            <h4 className={"title"}>CARS</h4>

            <NavLink to={"/add-car"} ><Button className={"addButton"} size="sm" >Add new car</Button></NavLink>

            <table className="cars-list">
                <tr>
                    <th>ID</th>
                    <th>MANUFACTURER</th>
                    <th>MODEL</th>
                    <th>REGISTRATION</th>
                    <th>IS RENT</th>
                    <th>FUEL</th>
                    <th>SERVICE</th>
                    <th>PRICE PRE HOUR</th>
                    <th> </th>
                </tr>
                {fetchedCars.map(car => (
                    <tr>
                        <td>{car.id}</td>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                        <td>{car.registration}</td>
                        <td>(coming soon)</td>
                        <td>{car.tankPercentage} %</td>
                        <td>{car.isServiceRequired.toString()}</td>
                        <td>{car.pricePerHour} $</td>
                        <td>
                            <ButtonGroup>
                                <Button className={"editButton"}size="sm" color="danger" tag={Link} to={"/edit-car/" + car.id}>Edit</Button>
                                <Button className={"deleteButton"} size="sm" color="danger" onClick={function(){ remove(car.id); refreshPage()}}>Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                    ))}
            </table>
        </div>
    );
}

export default Cars;