import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import styled from 'styled-components';

class CardsEdit extends React.Component {

    constructor(props) {
        super(props) 
        
        this.state = {
            decknametype: '',
            question: '',
            answer: '',
            subject: '',
            id: 1
        }
            console.log(this.state.CurentCards)
            
        ;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props.card);
        
        }
        componentWillMount() {
            this.setState({id: this.props.card.id})
        }

// componentWillMount(){
//     this.fetchCurentCards()
// }
//          fetchCurentCards(){
//             fetch("http://localhost:3000/api/log", {
//                 method: 'GET',
//                 headers: new Headers({
//                     'Content-Type': 'application/json',
//                     'Authorization': localStorage.getItem("token")
//                   })
//             })
//             .then((res) => res.json())
//             .then((logData) => {
//                 return this.setState({CurentCards: logData})
//                 console.log(this.state.CurentCards)
//     })
//     console.log(this.props.state)
// }
handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value, 
            id: this.props.card.id})
    
}
handleSubmit(event) {
        
    event.preventDefault();

    
    fetch("https://flashcard-irs.herokuapp.com/3000/api/log", {
        method: 'PUT',
        body: JSON.stringify({ log: this.state }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
    })
        .then((res) => res.json())
        // console.log('hello')
        .then((logData) => {
            this.props.refreshcards()
            // this.props.updateWorkoutsArray()
            // this is where you would clear out the fields 
        })
}


        displayform() {
           console.log( this.props.card)
            if (this.props.card.decknametype ) {
                return (
       
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                   <Label for="decknametype">Deck#/Name</Label>
                   <Input id="decknametype" type="text" name="decknametype" placeholder={this.props.card.decknametype} onChange={this.handleChange} />
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
                    
                )
            }
        
        }
        render() {
            return(
        <div>
            {this.displayform()}
        </div>


    // props.workouts.map((workout, id) => {
     

    )}


}

export default CardsEdit;