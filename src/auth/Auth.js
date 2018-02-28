import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './auth.css'
import Signup from './Signup';
import Login from './Login';
import {BrowserRouter as Router,
Route,
Switch,
} from 'react-router-dom';






const Auth = (props) => {
    return (

        
      <Switch>
            
            
            <Route path='/signup' exact={true}>
           
        <Container className="signupContainer">
            <Row>
                <Col md="4">
             
                    <Signup setToken={props.setToken}/>
                    
                </Col>
             </Row>             
         </Container>
        
        </Route>
       

<Route path='/login' exact={true}>
         <Container className="loginContainer"> 
           <Row>
                <Col md="4" className="login-col">
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
     </Route>   
    
        </Switch> 
       
    )
}

export default Auth;