
import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import "../../styling/index.css"
import {Button, ButtonGroup} from "reactstrap";

function Reservations() {
    const [fetchedReservations, setReservation] = useState([]);

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

    const fetchReservations = async () => {

        const response = await fetch(`http://localhost:8080/api/reservations`,
            {
                method: 'GET',
            });
        const reservations = await response.json();
        console.log(reservations);
        setReservation(reservations);
    }

    useEffect(() => {fetchReservations()}, []);


    return (
        <div>
            <span><NavLink to={"/"} className={"previous"}>&laquo; Back</NavLink></span>
            <h4 className={"title"}>RESERVATIONS</h4>
            <Button className={"addButton"} size="sm" >Add new reservation</Button>

            <table className="cars-list">
                <tr>
                    <th>TRANSACTION ID</th>
                    <th>RENTER ID</th>
                    <th>CAR ID</th>
                    <th>TOTAL PRICE (PLN)</th>
                    <th>START-DATE</th>
                    <th>END-DATE</th>
                    <th> </th>

                </tr>
                {fetchedReservations.map(reservation => (
                    <tr>
                        <td>{reservation.id}</td>
                        <td>{reservation.renterId}</td>
                        <td>{reservation.carId}</td>
                        <td>{reservation.price}</td>
                        <td>{reservation.startDate}</td>
                        <td>{reservation.endDate}</td>

                        <td>
                            <ButtonGroup>
                                <Button className={"editButton"}size="sm" color="danger" tag={Link} to={"/groups/" + reservation.id}>Edit</Button>
                                <Button className={"deleteButton"} size="sm" color="danger" onClick={function(){ remove(reservation.id); refreshPage()}}>Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Reservations;