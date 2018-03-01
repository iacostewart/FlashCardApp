  import React, { Component } from 'react';
  import { Button, Fade, FadeIn, ListGroup, ListGroupItem } from 'reactstrap';



class AdminDeckIndex extends Component{
         constructor(props){
             super(props)
             this.state = {
                 AdminDeck: [],
                 selectedCard: {},
                  
                 
             }
                this.fetchAdminDeck = this.fetchAdminDeck.bind(this);
        
        
            }
         
         fetchAdminDeck(){
            fetch("https://flashcard-irs.herokuapp.com/api/prebuilt", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem("token")
                  })
            })
                    .then((res) => res.json())
                    .then((cardData) => {
                        return this.setState({AdminDeck: cardData})
                    })
                    console.log(this.state)
                    
        }    
        
        render(){

            return(
                <div>
            <div className="main">
                <div className="mainDiv">
                
                <Button type="submit" onClick={this.fetchAdminDeck} color="primary">Update</Button>


                </div>
            </div>


                </div>

            )
        }



    } 
export default AdminDeckIndex;

// map of data to dispaly <Button


                     
        //         <thead>
        //             <tr>
        //                 <th>#</th>
        //                 <th>Subject</th>
        //                 <th>decknametype</th>
        //                 <th>Question</th>
        //                 <th>Profetic Answer</th>
        //                 <th>Non belivers click below</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 props.workouts.map((workout, id) => {
        //                     return (
        //                         <tr key={id}>
        //                             <th scope="row">{workout.id}</th>
        //                             <td>{workout.subject}</td>
        //                             <td>{workout.decknametype}</td>
        //                             <td>{workout.question}</td>
        //                             <td>{workout.answer}</td>
        //                             <td><Button id={workout.id} onClick={props.delete}  color="danger">Delete</Button></td>
        //                             <td><Button id={workout.id} onClick={e=>props.update(e, workout)} color="primary">Update</Button></td>
        //                         </tr>

        //                     )
        //                 })
        //             }
        //         </tbody>
        //     </Table>
        //     <div></div>
        //     <div>
        //     </div>
        // </div>



      








// // section for a git request 
// fetch("http://localhost:3000/api/log", {
//     method: 'PUT',
//     body: JSON.stringify({ log: this.state }),
//     headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': this.props.token
//     })
// })


//     .then((res) => res.json())
//     .then((logData) => {
//         return this.setState({workouts: logData})
//     })
// console.log(this.props.state)
// }

// workoutDelete(event){
//     fetch("http://localhost:3000/api/log", {
//         method: 'DELETE',
//         body: JSON.stringify({log: {id:event.target.id}}),
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': this.props.token
//           })
//     })
//     .then((res) => this.updateWorkoutsArray())