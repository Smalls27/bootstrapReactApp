import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler, 
    Collapse, Card, CardImg, CardTitle, CardText, CardBody, CardColumns, Button } from "reactstrap"; 

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    render() {
        const list = this.props.products.map(product => {
            return (
                <Card className="mb-5">
                    <CardImg style={{height: 235 + "px"}} src={product.image} className="img-thumbnail" />
                    <CardBody>
                        <CardTitle className="font-weight-bold">{product.name}</CardTitle>
                        <CardText>{product.description}</CardText>
                        <Button className="btn btn-primary btn-block">{product.price}</Button>
                    </CardBody>
                </Card>
            )
        })

        return (
            <React.Fragment>
                <Navbar expand="md" className="navbar-dark" sticky="top">
                    <div className="container">
                        <NavbarBrand className="bigLogo white" href="/">RGM</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/products" className="active">Products</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contactus">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
                <div className="container space2">
                    <div className="row">
                        <div className="col mx-auto">
                        <Card className="card1">
                            <CardBody>
                                <CardTitle className="font-weight-bold biggerLetters">Give Your Kitchen A Makeover</CardTitle>
                                <CardText>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                                </CardText>
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                    <br />
                    <hr />
                </div>
                
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <CardColumns className="">
                                {list}
                            </CardColumns>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Products;