import React, { useState } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../auth/axiosAuth';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import '../css/signin.css';

export default function SignIn(props) {

    const [user, setUser] = useState({ email: "", password: "" });

    const onInputChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        }); 
    };


    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post('/auth/login', user)
             .then(res => {
                 console.log("Thiss is the login Response:", res)
                 localStorage.setItem("token", res.data.payload);
                 props.history.push('/protected')
            })
             .catch(err => console.log(err))
                setUser({ username: '', password: '' })
    };



     return (
         <div className = "signin">
            <div >
                <Link to = '/'>
                    HOME
                </Link>
                
                <Form className = "form" onSubmit={handleSubmit}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 set">
                        <Label for="username" className="mr-sm-2">Username</Label>
                        <Input onChange={onInputChange}
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="enter your username"
                        value={user.username} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 set">
                        <Label for="password" className="mr-sm-2">Password</Label>
                        <Input onChange={onInputChange}
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="enter your password"
                        value={user.password} />
                    </FormGroup>
                    <Button>Submit</Button>
                    <p>Dont Have an account? 
                        <Link to = '/signup'>
                            SIGN UP
                        </Link>
                    </p>
                </Form>
            </div>
        </div>
     )
  }
