import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import Signup from './signup';
import Login from './login';

class AuthModal extends Component {

    constructor() {
        super();
        this.state = {
            modal: false,
            login: false,
            signup: false
        };
        this.toggleModal = this.toggleModal.bind(this)
        this.toggleLogin = this.toggleLogin.bind(this)
        this.toggleSignup = this.toggleSignup.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    toggleModal(event) {
        if (event)
            event.target.id == 'login' ? this.toggleLogin() : this.toggleSignup()
        this.setState({
            modal: !this.state.modal,
        });
    }

    toggleLogin() {
        this.setState({
            login: !this.state.login,
            signup: false
        });
    }

    toggleSignup() {
        this.setState({
            signup: !this.state.signup,
            login: false
        });
    }

    onSubmit(formData) {
        fetch('http://rest.learncode.academy/api/learncode/kenn', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (data) => {
                console.log(`Welcome user`)
                this.setState({ modal: false, signup: false, login: false })
            }
            )
    }

    getState(){
        console.log(this.state);
    }

    render() {
        let btn = null;
        if (this.state.login && !this.state.signup) {
            btn = <Login submit={this.onSubmit} />
        } else {
            btn = <Signup submit={this.onSubmit} />
        }

        return (
            <div>
                <Button onClick={this.toggleModal} id="signup"> Signup </Button>
                <Button onClick={this.toggleModal} id="login"> Login </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal} backdrop="static">
                    <ModalHeader toggle={this.toggleModal}> Eleven Auth </ModalHeader>
                    <ModalBody>
                        {btn}
                    </ModalBody>
                </Modal>
                <button onClick={this.getState}>get state</button>
            </div>
        )
    }


}

export default AuthModal;