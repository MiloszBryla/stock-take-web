import React, {useEffect, useState} from 'react';
import "../../../styling/index.css"
import {Link, NavLink, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";

function EditUser({match}) {

    const [user, setUser] = useState([]);
    const { register, handleSubmit } = useForm();
    const history = useHistory();



    const fetchUser = async () => {
        const response = await fetch(`http://localhost:8080/api/users/${match.params.id}`,
            {
                method: 'GET',
            });
        const user = await response.json();
        setUser(user);

    }

    useEffect(() => {fetchUser();}, []);

    const onSubmit = (data) => {
        data.userId = user.id;
        console.log(data);
        fetch(`http://localhost:8080/api/users`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({
                    id: user.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    email: data.email

                }),
        }).then((response) => {
            if(response.status === 200){
                console.log(response);
                history.push("/users");
            } else{
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
                <h4>Edit user:  {user.id}</h4>


                <div className="form-group">
                    <label htmlFor={"manufacturer"} className={"form-label"}>First Name</label><br/>
                    <input type="text" className="form-control" name="firstName" ref={register} defaultValue={user.firstName}/>
                </div>

                <div className="form-group">
                    <label htmlFor={"model"} className={"form-label"}>Last Name</label><br/>
                    <input type="text" className="form-control" name="lastName" ref={register} defaultValue={user.lastName}/>
                </div>

                <div className="form-group">
                    <label htmlFor={"registration"} className={"form-label"}>Address</label><br/>
                    <input type="text" className="form-control" name="address" ref={register} defaultValue={user.address}/>
                </div>

                <div className="form-group">
                    <label htmlFor="isServiceRequired">Email</label><br/>
                    <input type="text" className="form-control" name="email" ref={register} defaultValue={user.email}/>
                </div>


                <button type="submit" className="addButton">SAVE CHANGES</button>

            </form>

        </div>
    );
}

export default EditUser;