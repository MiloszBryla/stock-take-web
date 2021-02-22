import React from 'react';
import "../../styling/index.css"
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Button} from "reactstrap";


function AddFile() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        fetch('http://localhost:8080/api/cars', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
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
                <h4>Add new car</h4>

                <div className="form-group">
                    <input type="text" className="form-control" name="brandName" ref={register} placeholder="Brand/name"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="carId" ref={register} placeholder="Registration number"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="rent"  ref={register} placeholder="Already rented?"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="service" ref={register} placeholder="Require service?"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="fuel"  ref={register} placeholder="Fuel level (%)"/>
                </div>

                <button type="submit" className="addButton">ADD NEW CAR</button>

            </form>
        </div>
    );
}

export default AddFile;