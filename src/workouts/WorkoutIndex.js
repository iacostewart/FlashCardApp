import React from 'react';
import WorkoutCreate from './WorkoutCreate';
import { Container, Row, Col } from 'reactstrap';
import WorkoutsTable from './WorkoutsTable';


class WorkoutIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            workouts: []
        }

        this.fetchWorkouts = this.fetchWorkouts.bind(this);
        this.updateWorkoutsArray = this.updateWorkoutsArray.bind(this);
    }

    componentWillMount(){
        this.fetchWorkouts()
    }

    fetchWorkouts(){
        fetch("http://localhost:3000/api/log", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({workouts: logData})
        })
    }

    updateWorkoutsArray(){
        this.fetchWorkouts()
    }

    render() {
        const workouts = this.state.workouts.length >= 1 ? <WorkoutsTable workouts={this.state.workouts}/> :''
        return (
            <Container>
            <Row>
                <Col md="3">
                    <WorkoutCreate token = {this.props.token} updateWorkoutsArray={this.updateWorkoutsArray}/>
                </Col>
                <Col md="7">
                    {workouts}
                </Col>
            </Row>
        </Container>
        )
    }
}

export default WorkoutIndex