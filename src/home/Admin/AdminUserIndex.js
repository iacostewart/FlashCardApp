import React, { Component }  from 'react';
import { Container, Row, Col } from 'reactstrap';
import AdminUserModTable from './AdminUserModTable'



class AdminUserIndex extends Component {
        constructor(props){
            super(props)
                this.state = {
                    userlist: []
                }
            console.log(this.props.state)
this.fetchUserIndex = this.fetchUserIndex.bind(this);
this.userindexDelete = this.userindexDelete.bind(this);
this.userindexUpdate = this.userindexUpdate.bind(this);


// fetch("https://flashcard-irs.herokuapp.com/3000/api/users", {
        }
        fetchUserIndex(){
            fetch("https://flashcard-irs.herokuapp.com/api/users", {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token
                  })
            })
            .then((res) => res.json())
            .then((logData) => {
                return this.setState({user: logData})
            })
       console.log(this.props.state)
        }
    
        updateUserIndexArray(){
            this.fetchUserIndex()
        }
        userindexDelete(event){
            fetch("https://flashcard-irs.herokuapp.com/api/users", {
                method: 'DELETE',
                body: JSON.stringify({user: {id:event.target.id}}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token
                  })
            })
            .then((res) => this.updateUserIndexArray())
        }

        userindexUpdate(event) {
            fetch("https://flashcard-irs.herokuapp.com/api/users", {
                method: 'PUSH',
                body: JSON.stringify({user: {id:event.target.id}} ),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token
                })
                
            })
            .then((res) => this.updateUserIndexArray())
        }
    
    

        
        
        render() {
            const userlist = this.state.userlist.length >=1 ? <AdminUserModTable userlist={this.state.userlist} token={this.props.token} delete={this.userindexDelete} update={this.userindexUpdate}/> : <h2>Log a workout to see table</h2> 
            return( 
        
         <Container> 
             
             <Row>
                 <Col md='12'>
                     {userlist}
                 </Col>
             </Row>
           </Container>       
                 )
             }
         } 

export default AdminUserIndex;