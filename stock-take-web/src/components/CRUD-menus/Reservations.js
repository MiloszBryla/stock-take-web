
import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import "../../styling/index.css"

function Reservations() {
    const [fetchedReservations, setReservation] = useState([]);

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
            <span><NavLink to={"/"}>&lt; back</NavLink></span>
            <h4 className={"title"}>RESERVATIONS</h4>
            <table className="cars-list">
                <tr>
                    <th>TRANSACTION ID</th>
                    <th>RENTER ID</th>
                    <th>CAR ID</th>
                    <th>TOTAL PRICE (PLN)</th>
                    <th>START-DATE</th>
                    <th>END-DATE</th>
                </tr>
                {fetchedReservations.map(reservation => (
                    <tr>
                        <td>{reservation.id}</td>
                        <td>{reservation.renterId}</td>
                        <td>{reservation.carId}</td>
                        <td>{reservation.price}</td>
                        <td>{reservation.startDate}</td>
                        <td>{reservation.endDate}</td>

                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Reservations;