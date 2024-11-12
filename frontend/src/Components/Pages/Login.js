import React from "react";
import { Form } from "react-router-dom";
function Login(){
    return(
    <>
        <Form className='w-50 d-block mx-auto my-5 border rounded p-3'>
            <h3></h3>
            <Form.Group>
                <Form.Label>Email :</Form.Label>
                <Form.Control type='email' name="email" placeholder="Enter Your Email"/>
            </Form.Group>
            <Form.Group></Form.Group>
        </Form>
    </>
    )
}
export default Login;