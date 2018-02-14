import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class WorkoutCreate extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            result: '',
            description: '',
            def: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:3000/api/log", {
            method: 'POST',
            body: JSON.stringify({log: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updateWorkoutsArray()
            })
    }

    render() {
        return (
            <div>
                <h3>Log a Workout</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    {/* result */}
                    <FormGroup>
                        <Label for="result">Result</Label>
                        <Input id="result" type="text" name="result" placeholder="enter result" onChange={this.handleChange} />
                    </FormGroup>
                    {/* definition */}
                    <FormGroup>
                        <Label for="def">Select Workout Type</Label>
                        <Input type="select" name="def" id="def" onChange={this.handleChange}>
                            <option value="Time">Time</option>
                            <option value="Weight">Weight</option>
                            <option value="Distance">Distance</option>
                        </Input>
                    </FormGroup>
                    {/* description */}
                    <FormGroup>
                        <Label for="description">Notes</Label>
                        <Input id="description" type="text" name="description" placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default WorkoutCreate;