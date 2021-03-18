import React, { useState } from "react";
import { Navbar, NavbarBrand, Card, CardBody, CardHeader, Label, Form, FormGroup, Input, Button } from "reactstrap";

const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar className="navbar-dark" expand="md">
                <div className="container">
                    <NavbarBrand className="bigLogo white" href="/">RGM</NavbarBrand>
                </div>
            </Navbar>
            <div className="container moreSpace1">
                <div className="row">
                    <div className="col-6 mx-auto">
                    <Card>
                        <CardHeader className="biggerLetters head">Log-in</CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="text" name="email" id="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="text" name="paswword" id="password" placeholder="Password" />
                                </FormGroup>
                            </Form>
                            <Button type=" button" className="btn-block btn-primary">Log-in</Button>
                            <hr />
                        </CardBody>
                        <CardBody>
                            <p><a href="#" className="cadetblue">Create an account</a></p>
                            <p>Forgot your password?<a href="#" className="cadetblue">Click Here.</a></p>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;