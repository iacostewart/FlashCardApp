import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isEmpty: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateSignUp = this.validateSignUp.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    handleSubmit(event) {
        fetch("https://flashcard-irs.herokuapp.com//api/user", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
              })

        }).then(response => {
            if (response.status !== 200) {
                console.log('Error: ' + response.status);
                return;
            }
        
            response.json().then((data) => {
            this.props.setToken(data.sessionToken)
        });
    })
        event.preventDefault()
    }



    // handleSubmit(event) {
    //     fetch("https://flashcard-irs.herokuapp.com/3000/api/user", {
    //         method: 'POST',
    //         body: JSON.stringify({user:this.state}),
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //           })

    //     }).then(response => {
    //         if(response.status !==200) {
    //             console.log('Error: ' +response.status);
    //             return;
    //         }

    //     })
    //         response.json().then((data) => {
    //         this.props.setToken(data.sessionToken)
    //     });
    
    //     event.preventDefault()
    // }

    // This is the start of basic validation, but you can do a lot with this.
    validateSignUp(event) {
        this.setState({
            errorMessage:'Fields must not be empty'
        })
        event.preventDefault();
    }
componentWillUnmount(){
    window.location.href="/";
}
    render() {
        // here for validation
        const submitHandler = !this.state.username ? this.validateSignUp : this.handleSubmit
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt,</h6>
                <Form onSubmit={submitHandler} >
                       console.log('submit');
                    <FormGroup>
                        <Label for="username">username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                        {this.state.errorMessage && <span className="error">user name is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }


}

export default Signup;