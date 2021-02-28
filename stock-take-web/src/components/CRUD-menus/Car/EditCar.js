import React, {useEffect, useState} from 'react';
import "../../../styling/index.css"
import {Link, NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";

function EditCar({match}) {

    const [car, setCar] = useState([]);
    const [reservations, setReservations] = useState([]);
    const { register, handleSubmit } = useForm();



    const fetchCar = async () => {
        const response = await fetch(`http://localhost:8080/api/cars/${match.params.id}`,
            {
                method: 'GET',
            });
        const car = await response.json();
        setCar(car);
        console.log(car);
    }

    const fetchReservations = async () => {
        const response = await fetch(`http://localhost:8080/api/reservations/car=${match.params.id}`,
            {
                method: 'GET',
            });
        const car = await response.json();
        setReservations(reservations);
        console.log(reservations);
    }

    useEffect(() => {fetchCar(); fetchReservations()}, []);

    const onSubmit = (data) => {
        data.carId = car.id;
        console.log(data);
        fetch(`http://localhost:8080/api/cars`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if(response.status === 200){
                refreshPage();
                console.log(response)
            } else{
                refreshPage();
                console.log("something went wrong");
            }
        })
    }
    const refreshPage = ()=>{
        window.location.reload();
    }

    return (
        <div>

            <span><NavLink to={"/cars"} className={"previous"}>&laquo; Back</NavLink></span>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Edit form for car ID: {car.id}</h4>

                <div className="form-group">
                    <label htmlFor={"manufacturer"} className={"form-label"}>Manufacturer</label><br/>
                    <input type="text" className="form-control" name="manufacturer" ref={register} placeholder={car.manufacturer}/>
                </div>

                <div className="form-group">
                    <label htmlFor={"model"} className={"form-label"}>Model</label><br/>
                    <input type="text" className="form-control" name="model" ref={register} placeholder={car.model}/>
                </div>

                <div className="form-group">
                    <label htmlFor={"registration"} className={"form-label"}>Registration</label><br/>
                    <input type="text" className="form-control" name="registration" ref={register} placeholder={car.registration}/>
                </div>

                <div className="form-group">
                    <label htmlFor="isServiceRequired">Is Service Required?</label><br/>
                    <select name="isServiceRequired" ref={register}>
                        <option value="False">False</option>
                        <option value="True">True</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="isServiceRequired">Tank fill in %</label><br/>
                    <input type="number" className="form-control" name="tankPercentage" ref={register} placeholder={car.tankPercentage}/>
                </div>
                <div className="form-group">
                    <label htmlFor="isServiceRequired">Price per hour</label><br/>
                    <input type="number" className="form-control" name="pricePerHour" ref={register} placeholder={car.pricePerHour}/>
                </div>

                <button type="submit" className="addButton">SAVE CHANGES</button>

            </form>

            <div className={"car-reservations"}>
                <span><Link to={"/reservations"}>Active Reservations</Link></span>
                <table classname={"cars-list"}>
                    {reservations.map(function(reservation){return <td>start: {reservation.startDate}, end: {reservation.endDate}</td>})}
                </table>
            </div>
        </div>
    );
}

export default EditCar;