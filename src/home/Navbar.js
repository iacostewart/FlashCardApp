import React from 'react';
import {
    Row,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Col
} from 'reactstrap';
import { Link, Route, Redirect } from 'react-router'
import styled from 'styled-components';


const NavBack = styled.div`
background-image: linear-gradient(to right, #a4a3a3, #aca0a5, #ac9fb0, #9fa1bd, #85a7c7); `;




const Stretcher = styled.div`
    height: 100vh;
    width: 100vh;
    z-index: -21;
`;



class SiteBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <NavBack>
                <Navbar color="faded"   light expand="lg">
                    <NavbarBrand href="/">FlashMyCard</NavbarBrand>
                    <NavbarToggler onClick={this.props.loggout} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Nav className=" col-autonavbar-expand-lg navbar-light bg-light" navbar>
                            
                            <Col sm="2" md={{ size:2, ofset: 1}}>
                            <NavItem>
                                <NavLink href="/adminland">Admin..GodComplex</NavLink>
                            </NavItem>
                            </Col>  
                            <Col sm="2" md={{ size:2, ofset: 1}}>
                                <NavLink href="/lesserland">No Admins here..</NavLink>
                            <NavItem>
                            </NavItem>
                            </Col>
                            <Col sm="2" md={{ size:2, ofset: 1}}>
                            <NavItem>
                                <NavLink onClick={this.props.isLoggedIn ? () => this.props.clickLogout() : () => this.props.clickLogin() }> {this.props.isLoggedIn ? 'LogOut' : 'logIn'} </NavLink>
                            </NavItem>
                            </Col>
                            <Col sm="2" md={{ size:2, ofset: 1}}>
                            <NavItem>
                                <NavLink href="/">settings</NavLink>
                            </NavItem>
                            </Col>
                            <NavItem>
                                <NavLink href="/"></NavLink>
                            </NavItem>

                            <Col sm="2" md={{ size:2, ofset: 1}}>
                            <NavItem>
                                <NavLink href="/stack">StackMyDeck</NavLink>
                            </NavItem>
                            </Col>

                            <Col sm="2" md={{ size:2, ofset: 1}}>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            </Col>
                            <Col sm="2" md={{ size:2, ofset: 1}}>
                            <NavItem>
                                <NavLink href="/signup">SignUP</NavLink>
                            </NavItem>
                            </Col>
                            
                        </Nav>
                        </Col>
                    </Collapse>
                </Navbar>
                </NavBack>
                            


  <h1>Hello where am i.. </h1>
  <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>

  





            </div>
        );
    }

}

export default SiteBar;