import React from 'react';
import "../../../styling/index.css"
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Button} from "reactstrap";


function AddUser() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
         fetch('http://localhost:8080/api/users', {
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

                <span><NavLink to={"/users"} className={"previous"}>&laquo; Back</NavLink></span>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Add new user</h4>
                    <div className="form-group">
                        <input type="text" className="form-control" name="firstName" ref={register} placeholder="First name"/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" name="lastName" ref={register} placeholder="Last name"/>
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" name="email"  ref={register} placeholder="Enter email"/>
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" name="password" ref={register} placeholder="Enter password"/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" name="address"  ref={register} placeholder="Location"/>
                    </div>

                    <button type="submit" className="addButton">ADD NEW USER</button>

                </form>
            </div>
        );
}

export default AddUser;