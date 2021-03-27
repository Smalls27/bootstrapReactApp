import React from "react";
import { Navbar, NavbarBrand, Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Row } from "reactstrap";

const RetrievePassword = () => {
    return (
        <React.Fragment>
        <Navbar expand="md" className="navbar-dark">
            <div className="container">
                <NavbarBrand className="bigLogo white" href="/">RGM</NavbarBrand>
            </div>
        </Navbar>

        <div className="container moreSpace2">
            <div className="row">
                <div className="col-md-10 mx-auto">
                <Card>
                    <CardHeader className="biggerLetters head">Retrieve Password</CardHeader>
                    <CardBody>
                        <Form>
                            <p>Supply your email. We will send your password there.</p>
                            <FormGroup>
                                <Row>
                                    <Label className="col-md-2" htmlFor="email">Email</Label>
                                    <Input className="col-md-10" type="email" id="email" name="email" placeholder="Email" />
                                </Row>
                            </FormGroup>
                            <hr />
                            <FormGroup>
                                <a type="button" className="btn btn-block btn-primary" href="/">Submit</a>
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

export default RetrievePassword;