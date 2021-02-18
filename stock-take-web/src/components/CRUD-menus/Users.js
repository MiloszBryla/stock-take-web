import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import "../../styling/index.css"

function Users() {
    const [fetchedUsers, setUsers] = useState([]);

    const fetchReservations = async () => {

        const response = await fetch(`http://localhost:8080/api/users`,
            {
                method: 'GET',
            });
        const users = await response.json();
        console.log(users);
        setUsers(users);
    }

    useEffect(() => {fetchReservations()}, []);


    return (
        <div>
            <span><NavLink to={"/"}>&lt; back</NavLink></span>
            <h4 className={"title"}>USERS</h4>
            <table className="cars-list">
                <tr>
                    <th>USER ID</th>
                    <th>NAME </th>
                    <th>SURNAME</th>
                    <th>LOCATION</th>
                    <th>E-MAIL</th>
                    <th>PASSWORD</th>
                </tr>
                {fetchedUsers.map(user => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.address}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>

                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Users;