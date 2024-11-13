import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'
function Login() {
    return (
        <>
            <Form className='w-25 d-block mx-auto my-5 border rounded p-3'>
                <h3 className="text-center">REGISTRATION FORM</h3>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email :</Form.Label>
                    <Form.Control type='email' name="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Password :</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter your Password" />
                </Form.Group>
                <Button className="d-block mx-auto my-3" type="submit" variant="primary">Submit</Button>
                <Form.Text className="d-block text-center" muted>Don't you have account? <Link to='/register'>Register</Link></Form.Text>
            </Form>
        </>
    )
}
export default Login;