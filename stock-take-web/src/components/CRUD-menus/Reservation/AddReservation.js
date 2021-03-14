import React, {useEffect, useState} from 'react';
import "../../../styling/index.css"
import {NavLink, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";


function AddReservation() {

    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data)
        fetch('http://localhost:8080/api/reservations', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data),
        }).then((response) => {
            if(response.status === 200){
                console.log(response);
                history.push("/reservations");
            } else{
                refreshPage();
                console.log("something went wrong");
            }
        })
    }
    const refreshPage = ()=>{
        window.location.reload();
    }

    useEffect(() => { fetchCars(); }, []);
    const [fetchedCars, setCars] = useState([]);
    const fetchCars = async () => {
        const response = await fetch('http://localhost:8080/api/cars/ids',
            {
                method: 'GET',
                credentials: 'include',

            });
        const cars = await response.json();
        console.log(cars)
        setCars(cars);
    }

    useEffect(() => { fetchUser(); }, []);
    const [fetchedUsers, setUser] = useState([]);
    const fetchUser = async () => {
        const response = await fetch('http://localhost:8080/api/users',
            {
                method: 'GET',
                credentials: 'include',

            });
        const users = await response.json();
        console.log(users)
        setUser(users);
    }



    return (
        <div>

            <span><NavLink to={"/reservations"} className={"previous"}>&laquo; Back</NavLink></span>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Add reservation</h4>
                <div className="form-group">
                    <select className="drop-selector" name="user" ref={register}>
                        <option value="" selected disabled hidden>Choose...</option>
                        {fetchedUsers.map(element => (
                            <option  ref={register}>{element.firstName + " "}{element.lastName}</option>
                        ))} </select>                </div>

                <div className="form-group">
                    <select className="drop-selector"  name="carId" ref={register}>
                        <option value="" selected disabled hidden>Choose...</option>
                        {fetchedCars.map(element => (
                            <option  ref={register}>{element}</option>
                        ))} </select>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="startDate"  ref={register} placeholder="Start date"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="endDate" ref={register} placeholder="End date"/>
                </div>


                <button type="submit" className="addButton">SUBMIT</button>

            </form>
        </div>
    );
}

export default AddReservation;