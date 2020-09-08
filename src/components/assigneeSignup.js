import React, { Component, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

import '../css/signup.css';

export default function SignUp(props) {
    const [newAssigner, setNewAssigner] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: ''
    });
    
    const onSubmitHandler = (e, creds) => {
        
        e.preventDefault();
        axios.post("https://dutyapi.herokuapp.com/auth/register", creds)
        .then(res => {
            console.log(res);
            props.history.push("/protected");
        })
        .catch(err => console.log(err));
      }

    const onInputChange = e => {

        setNewAssigner({
            ...newAssigner,
            [e.target.name]: e.target.value,
        }); 
    };
    
         return (
            <div className = 'signup'>
                <Form onSubmit = {e => onSubmitHandler(e, newAssigner)}>
                <FormGroup className = 'set'>
                    <Label for="username">Username {newAssigner.username || ''}</Label>
                    <Input onChange = {onInputChange}
                    value = {newAssigner.username}
                    type="username"
                    name="username"
                    id="username"
                    placeholder="create a username"
                    />
                </FormGroup>
                <FormGroup className = 'set'>
                    <Label for="email">Email {newAssigner.email || ''}</Label>
                    <Input onChange = {onInputChange}
                    value = {newAssigner.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="add your email"
                    />
                </FormGroup>
                <FormGroup className = 'set'>
                    <Label for="password">Password {newAssigner.password || ''}</Label>
                    <Input onChange = {onInputChange}
                    value = {newAssigner.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="create a password"
                    />
                </FormGroup>
                
                <FormGroup className = 'set'>
                    <Label for="phonenumber">Phone Number {newAssigner.phonenumber || ''}</Label>
                    <Input onChange = {onInputChange}
                    value = {newAssigner.phonenumber}
                    type="phonenumber"
                    name="phonenumber"
                    id="phonenumber"
                    placeholder="enter your phone number"
                    />
                </FormGroup>
                <div className = "button">
                <Button>Submit</Button>
                </div>
                </Form>
                <Link to = '/signin' >
                {/* <Link to = '/signin'> */}
                    Want to sign in? Click here 
                </Link>
    </div>
  );
}
