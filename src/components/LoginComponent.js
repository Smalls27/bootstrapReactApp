import React, { Component } from "react";
import { LocalForm, Errors, Control } from "react-redux-form";
import { Navbar, NavbarBrand, Card, CardBody, CardHeader, Label, Row, Col, Button } from "reactstrap";

const isEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const passwordValidateMax = len => val => !val || (val.length <= len);
const passwordValidateMin = len => val => val && (val.length >= len);

class LoginPage extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            touched: {
                email: false,
                password: false
            }
        }
        this.credentialValidate = this.credentialValidate.bind(this);
    }

    credentialValidate(values) {
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && values.password.length >= 5) {
            window.location.assign("/products");
        }
    }
    
    render() {
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
                                <LocalForm onSubmit={values => this.credentialValidate(values)}>
                                    <Row className="form-group">
                                        <Label className="col-md-3" htmlFor="email">Email</Label>
                                        <Col>
                                            <Control.text 
                                                model=".email"
                                                className="col-md-9 form-control" 
                                                type="text" 
                                                name="email" 
                                                id="email" 
                                                placeholder="Email"
                                                validators={{
                                                    isEmail
                                                }} 
                                            />
                                            <Errors 
                                                model=".email" 
                                                className="text-danger" 
                                                show="touched"
                                                component="div" 
                                                messages={{
                                                    isEmail: "Please enter a valid email."
                                                }} 
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label className="col-md-3" htmlFor="password">Password</Label>
                                        <Col>
                                        <Control.text 
                                            className="col-md-9 form-control" 
                                            type="password"
                                            model=".password" 
                                            name="password" 
                                            id="password" 
                                            placeholder="Password"
                                            validators={{
                                                passwordValidateMax: passwordValidateMax(15),
                                                passwordValidateMin: passwordValidateMin(5)
                                            }} 
                                        />
                                        <Errors 
                                                model=".password" 
                                                className="text-danger" 
                                                show="touched"
                                                component="div" 
                                                messages={{
                                                    passwordValidateMax: "Password must be 15 characters or less",
                                                    passwordValidateMin: "Password must be at least 5 characters"
                                                }} 
                                            />
                                        </Col>
                                    </Row>
                                    <Button type="submit" className="btn btn-block btn-primary">Log-in</Button>
                                </LocalForm>
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
}

export default LoginPage;