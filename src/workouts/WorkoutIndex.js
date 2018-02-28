import React from 'react';
import WorkoutCreate from './WorkoutCreate';
import { Container, Row, Col } from 'reactstrap';
import WorkoutsTable from './WorkoutsTable';
import CardsEdit from './CardsEdit'


// this works with the current workout log server, if there server is on a differnt port, they need to change the respective lines for fetch

class WorkoutIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            workouts: [],
            selectedCard: {}
        }
console.log(this.props.state)
        this.fetchWorkouts = this.fetchWorkouts.bind(this);
        this.updateWorkoutsArray = this.updateWorkoutsArray.bind(this);
        this.workoutDelete = this.workoutDelete.bind(this);
        this.updateCard = this.updateCard.bind(this);
    }

    componentDidMount(){
        this.fetchWorkouts()
    }

    fetchWorkouts(){
        fetch("https://flashcard-irs.herokuapp.com/3000/api/log", {
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
   console.log(this.props.state)
    }

    updateWorkoutsArray(){
        this.fetchWorkouts()
        this.setState({selectedCard: {}})
    }

    workoutDelete(event){
        fetch("https://flashcard-irs.herokuapp.com/3000/api/log", {
            method: 'DELETE',
            body: JSON.stringify({log: {id:event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => this.updateWorkoutsArray())
    }


    workoutUpdate(event) {
        
    }

    

updateCard(event, card) {
    console.log('uddateCArd')
     this.setState({selectedCard: card})
}

    render() {
        const workouts = this.state.workouts.length >= 1 ? <WorkoutsTable workouts={this.state.workouts} token={this.props.token} delete={this.workoutDelete} update={this.updateCard}/> : <h2>Log a workout to see table</h2> 
        return (
            <Container>
            <Row>
                <Col md="3">
                    <WorkoutCreate token = {this.props.token} updateWorkoutsArray={this.updateWorkoutsArray}/>
                </Col>
                <Col md="9">
                    {workouts}
                </Col>
            </Row>
          <Row>
              <Col>
              <CardsEdit card={this.state.selectedCard}  token = {this.props.token} refreshcards={this.updateWorkoutsArray}/>
              </Col>
          </Row>    
        </Container>
        )
    }
}

export default WorkoutIndex