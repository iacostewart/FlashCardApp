import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class WorkoutCreate extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            decknametype: '',
            question: '',
            answer: ''
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        console.log(event);
        event.preventDefault();

        fetch("http://localhost:3000/api/log", {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updateWorkoutsArray()
                // this is where you would clear out the fields 
            })
    }

    render() {
        return (
            <div>
                <h3>Create Card DAta</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                   
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
            </div>
        )
    }
}

export default WorkoutCreate;