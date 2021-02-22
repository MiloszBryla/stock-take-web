import React, {useEffect, useState} from 'react';
import "../../styling/index.css"
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
        console.log(cars);
        setCars(cars);
    }
    async function remove(id) {
        await fetch(`http://localhost:8080/api/users/${id}`, {
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

            <Button className={"addButton"} size="sm" >Add new car</Button>

            <table className="cars-list">
                <tr>
                    <th>ID</th>
                    <th>MANUFACTURER</th>
                    <th>REGISTRATION</th>
                    <th>IS RENT</th>
                    <th>SERVICE</th>
                    <th>FUEL</th>
                    <th> </th>
                </tr>
                {fetchedCars.map(car => (
                    <tr>
                        <td>{car.id}</td>
                        <td>{car.brandName}</td>
                        <td>{car.carId}</td>
                        <td>{car.rent}</td>
                        <td>{car.service}</td>
                        <td>{car.fuel}</td>
                        <td>
                            <ButtonGroup>
                                <Button className={"editButton"}size="sm" color="danger" tag={Link} to={"/groups/" + car.id}>Edit</Button>
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