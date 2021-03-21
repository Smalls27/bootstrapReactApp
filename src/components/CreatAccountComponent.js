import React from "react";
import { Navbar, NavbarBrand, Card, CardHeader, CardBody, Form, FormGroup, Input, Label, Row } from "reactstrap";

const CreateAccount = () => {
    return (
        <React.Fragment>
            <Navbar expand="md" className="navbar-dark">
                <div className="container">
                    <NavbarBrand className="bigLogo white">RGM</NavbarBrand>
                </div>
            </Navbar>

            <div className="container moreSpace1">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <Card>
                            <CardHeader className="biggerLetters head">Create account</CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Row>
                                            <Label className="col-md-2" htmlFor="email">Email</Label>
                                            <Input className="col-md-3" type="email" id="email" name="email" placeholder="Email" />
                                            <Label className="col-md-3" htmlFor="password">Password</Label>
                                            <Input className="col-md-4" type="password" id="password" name="password" placeholder="Password" />
                                        </Row>
                                    </FormGroup>
                                    <hr />
                                    <FormGroup>
                                        <Row>
                                            <Label className="col-md-2" htmlFor="nickname">Nickname</Label>
                                            <Input className="col-md-10" type="text" id="nickname" name="nickname" placeholder="Nickname" />
                                        </Row>
                                    </FormGroup>
                                    <hr />
                                    <FormGroup>
                                        <a type="button" className="btn btn-block btn-primary space3" href="/">Create Account</a>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateAccount;