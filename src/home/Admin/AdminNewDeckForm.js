import React, { Component } from 'react';
import {Form, FormGroup, Label, Col, Input, FormText, Button}  from 'reactstrap';





class AdminNewDeckForm extends Component {
   render() {

    return(
   

        <Form onSubmit={this.handleSubmit} >
        <FormGroup row>
          <Label for="admindeckname" sm={2}>Deck Name</Label>
          <Col sm={10}>
            <Input type="admindeckname" name="admindeckname" id="admindeckname" placeholder="EveryoneDoes it.. Name your Deck.." onChange={this.handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup>
        <Label for="admindificulitylevel" sm={2}>Dificulity Level</Label>
          <Col sm={4}>
          <Input type="select" name="admindificulitylevel" id="admindificulitylevel" placeholder="Dificulity Level" onChange={this.handleChange}>
            <option>0</option>
            <option>You can tie your shoes..but thats the extent</option>
            <option>lead exposure is a thing</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
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
        
        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-12">Would you ask your Grandmother this question..</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input id="childok" type="radio" name="childok" nChange={this.handleChange} />{' '}
                  Yep... This question suitable for all ages..
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input id="ratedr"type="radio" name="Adults ONly" onChange={this.handleChange}/>{' '}
                Nope.. not a good question for the younger crowd... 
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled />{' '}
                this is disabled... cause im afraid of how far this rateing system will go... seriously.. lawyers will be involved..
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

        
    

export default AdminNewDeckForm;



