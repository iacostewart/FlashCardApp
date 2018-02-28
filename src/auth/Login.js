import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {
    BrowserRouter as Router,
   
    Route,
    Switch,
  } from 'react-router-dom';
import styled from 'styled-components'


// this works with the current workout log server, if there server is on a differnt port, they need to change the respective lines for fetch

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        fetch("https://flashcard-irs.herokuapp.com/3000/api/login", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)

        }) 
        event.preventDefault()
        }
        
    componentWillUnmount(){
        window.location.href="/"
    }  
         
    

    render() {
        return (

            <div >
             
                <h1>Login</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup id='LiForm' >
                        <Label for="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                                <br/>
                                <br/>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button class="button" type="submit" > Submit </Button> <a href="/" class="button">Nevermind</a>
                </Form>
                
            </div>
        )
    }


}

export default Login;