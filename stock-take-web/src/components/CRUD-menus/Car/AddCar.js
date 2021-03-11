import React from 'react';
import "../../../styling/index.css"
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Button} from "reactstrap";


function AddCar() {

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
                    <input type="text" className="form-control" name="manufacturer" ref={register} placeholder="Manufacturer"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="model" ref={register} placeholder="Model"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" name="registration" ref={register} placeholder="Registration"/>
                </div>

                <div className="form-group">
                    <label htmlFor="isServiceRequired">Is Service Required</label><br/><br/>
                    <select name="isServiceRequired" ref={register}>
                        <option value="False">False</option>
                        <option value="True">True</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="number" className="form-control" name="tankPercentage" ref={register} placeholder="Tank fill in %"/>
                </div>

                <div className="form-group">
                    <input type="number" className="form-control" name="pricePerHour" ref={register} placeholder="Price per hour"/>
                </div>

                <button type="submit" className="addButton">ADD NEW CAR</button>

            </form>
        </div>
    );
}

export default AddCar;