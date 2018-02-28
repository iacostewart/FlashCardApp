import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';



const CreateMain = styled.div`
     
     
`;



class WorkoutCreate extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            subject: '',
            decknametype: '',
            question: '',
            answer: ''
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(props);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    

    handleSubmit(event) {
        
        event.preventDefault();

        
        fetch("https://flashcard-irs.herokuapp.com/api/log", {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            // console.log('hello')
            .then((logData) => {
                this.props.updateWorkoutsArray()
                // this is where you would clear out the fields 
            })
    }

    render() {
        return (
            <CreateMain>
                <h3>Create Card DAta</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                        <Label for="subject">Subject</Label>
                        <select name="subject" id="subject" type="text"  onChange={this.handleChange}>
                        <option value ="science" >Science</option>
                        <option value ="html" >HTML</option>
                        <option value ="bootstrap" >BootStrap</option>
                        <option value ="state" >State</option>
                        <option value ="this" >.this</option>
                        
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label for="decknametype">Deck#/Name</Label>
                        <Input id="decknametype" type="text" name="decknametype" placeholder="enter subject or deck name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="question">Question</Label>
                        <Input id="question" type="text" name="question" placeholder="Enter Question" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="answer">Answer</Label>
                        <Input id="answer" type="text" name="answer" placeholder="im not psychic.. enter the answer " onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </CreateMain>
        )
    }
}

export default WorkoutCreate;