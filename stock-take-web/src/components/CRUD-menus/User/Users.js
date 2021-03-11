import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import "../../../styling/index.css"
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';




function Users() {
    const [fetchedUsers, setUsers] = useState([]);

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
            <span><NavLink to={"/"} className={"previous"}>&laquo; Back</NavLink></span>

            <h4 className={"title"}>USERS</h4>

            <NavLink to={"/add-user"}><Button className={"addButton"} size="sm" >Add new user</Button></NavLink>

            <table className="cars-list">
                <tr>
                    <th>USER ID</th>
                    <th>NAME </th>
                    <th>SURNAME</th>
                    <th>LOCATION</th>
                    <th>E-MAIL</th>
                    <th>PASSWORD</th>
                    <th> </th>
                </tr>
                {fetchedUsers.map(user => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.address}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <ButtonGroup className={"button-group"}>
                                <Button className={"editButton"} size="sm" color="danger" tag={Link} to={"/groups/" + user.id}>Edit</Button>
                                <Button className={"deleteButton"} size="sm" color="danger" onClick={function(){ remove(user.id); refreshPage()}}>Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Users;