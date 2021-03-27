import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, 
    Collapse, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";


class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    render() {
        return (
            <React.Fragment>
                <Navbar expand="md" className="navbar-dark">
                    <div className="container">
                        <NavbarBrand className="bigLogo white" href="/">RGM</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/products">Products</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="active">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <div className="container moreSpace1">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <Card>
                                <CardHeader className="biggerLetters head">Talk to us!</CardHeader>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label htmlFor="email">Email</Label>
                                            <Input type="email" id="email" name="email" placeholder="Email" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input type="text" id="subject" name="subject" placeholder="Subject" />
                                        </FormGroup>                                        
                                        <FormGroup>
                                            <Label htmlFor="concern">Concern</Label>
                                            <Input type="textarea" id="concern" name="concern" placeholder="Tell us whats on your mind..." />
                                        </FormGroup>
                                        <hr />
                                        <Button className="btn btn-block btn-primary">Send</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactPage