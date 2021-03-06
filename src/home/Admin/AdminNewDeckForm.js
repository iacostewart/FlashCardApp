import React, { Component } from 'react';
import {Form, FormGroup, Label, Col, Input,  Button}  from 'reactstrap';





class AdminNewDeckForm extends Component {

constructor(props) {
  super(props)
  
  
    this.state ={ 
    subject: '',
    admindeckname: '',
    ratedr: false,
    adminanswer: '',
    childok: false,
    adminimg: '',
    adminquestion: '',
    admindificulitylevel: 0,
    user:''    
    
  },
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
console.log(this.props.token)
      fetch("https://flashcard-irs.herokuapp.com/api/prebuilt", {
        method: 'POST',
        body: JSON.stringify({ prebuilt: this.state }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization' : localStorage.getItem("token")
        })
      }).then((res) => res.json())
      }

   render() {

    return(
   

        <Form onSubmit={this.handleSubmit} >
        
        <FormGroup row>
          <Label for="admindeckname" sm={2}>Deck Name</Label>
          <Col sm={10}>
            <Input type="admindeckname" name="admindeckname" id="admindeckname" placeholder="EveryoneDoes it.. Name your Deck.." onChange={this.handleChange}/>
          </Col>
          <FormGroup>
          <Label for="admindeckname" sm={6}>subject</Label>
          <Col md={12}>
          <Input type="select" name="subject" id="subject" placeholder="subject Level" onChange={this.handleChange}>
            <option>Math</option>
            <option>Science</option>
            <option>History</option>
            <option>HTML</option>
          </Input>
          </Col>
                    </FormGroup>
        </FormGroup>
        <FormGroup>
        
          <Col sm={4}>
          
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="adminimg" sm={2}>IMG?</Label>
          <Col sm={10}>
            <Input type="text" name="adminimg" id="adminimg" placeholder="img...url please"onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="adminquestion" sm={2}>Question</Label>
          <Col sm={10}>
            <Input type="textarea" name="adminquestion" id="adminquestion" onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="adminanswer" sm={2}>Answer</Label>
          <Col sm={10}>
            <Input type="textarea" name="adminanswer" id="adminanswer" onChange={this.handleChange} />
          </Col>
        </FormGroup>
        
       
        <Button type="submit" color="primary"> Submit </Button>
      </Form>
      
    );
  }
  
}

        
    

export default AdminNewDeckForm;



