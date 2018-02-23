import React from 'react';
import {
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
                <Navbar color="faded"   light expand="lg">
                    <NavbarBrand href="/">Sample Auth App</NavbarBrand>
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
                                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
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
                        </Nav>
                        </Col>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default SiteBar;