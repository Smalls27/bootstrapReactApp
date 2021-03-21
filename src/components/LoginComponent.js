import React from "react";
import { Navbar, NavbarBrand, Card, CardBody, CardHeader, Label, Form, FormGroup, Input, Button, Row } from "reactstrap";

const LoginPage = () => {
    return (
        <React.Fragment>
            <Navbar className="navbar-dark" expand="md">
                <div className="container">
                    <NavbarBrand className="bigLogo white" href="/">RGM</NavbarBrand>
                </div>
            </Navbar>
            <div className="container moreSpace1">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    <Card>
                        <CardHeader className="biggerLetters head">Log-in</CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Row>
                                        <Label className="col-md-2" htmlFor="email">Email</Label>
                                        <Input className="col-md-10" type="text" name="email" id="email" placeholder="Email" />
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Label className="col-md-3" htmlFor="password">Password</Label>
                                        <Input className="col-md-9" type="text" name="paswword" id="password" placeholder="Password" />
                                    </Row>
                                </FormGroup>
                            </Form>
                            <Button type=" button" className="btn-block btn-primary">Log-in</Button>
                            <hr />
                        </CardBody>
                        <CardBody>
                            <p><a href="/createAccount" className="cadetblue">Create an account</a></p>
                            <p>Forgot your password?<a href="/retrievePassword" className="cadetblue">Click Here.</a></p>
                        </CardBody>
                    </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;