import React, { useState } from "react";
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Register() {
    const [AddUserDetails,setAddUserDetails]= useState({
        name:'',
        email:'',
        password:''
    })
    
    function handlechange(Event){
        setAddUserDetails({
            ...AddUserDetails,
            [Event.target.name]:Event.target.value,
        })
    }

    function handlesubmit(Event) {
        Event.preventDefault();
        console.table(AddUserDetails)
        axios.post(`https://ominous-adventure-4jwvwpj9jr9fqprr-3002.app.github.dev/register`,AddUserDetails).then(()=>{
            console.log("data was submitted successfully")
        }).catch(()=>{
            console.log('something went wrong') 
        })
    }

    return (
        <>
            <Form className="w-25 d-block mx-auto my-5 border p-4 rounded" onSubmit={handlesubmit}>
                <h3 className="text-center">REGISTRATION FORM</h3>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Name :</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" onChange={handlechange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email :</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Your Email" onChange={handlechange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Password :</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Your Password" onChange={handlechange} />
                </Form.Group>
                <Button variant="primary" type="submit" className="d-block mx-auto my-3">Submit</Button>
                <Form.Text className="d-block text-center" muted>Already have an account? <Link to='/login'>Register</Link></Form.Text>
            </Form>
        </>
    )
}

export default Register;