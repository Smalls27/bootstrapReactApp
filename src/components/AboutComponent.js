import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Card, CardTitle, CardBody, CardText } from "reactstrap";


class AboutPage extends Component {
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
                                <NavLink href="#" className="active">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contactus">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

            <div className="container space1">
                <Card className="card1">
                    <CardBody>
                        <img className src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhISFRUVFRUQFRUVFRYVEBUQFRUXFhUWFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGC0dHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tN//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EADsQAAEDAwMCBAQEBAUEAwAAAAEAAgMEESEFEjFBUQYiYXETgZGhMkKxwRRi0eEVI1Jy8AeCovEkM5L/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/EACIRAQEBAQACAgICAwAAAAAAAAABAhESIQMxQVETIjJhcf/aAAwDAQACEQMRAD8Ac+FfEb4xtdchW+Gukm/CNo7leTUNU6N3F16V4ZdO8AubtHrynhafQUbW5OT3K4rqASC24t9gjXNwlktZtNroX/YwkrPC55+MT7t/uk0+mOYebq6S1gI5SaskaSp3EPNUBBhtlHOETZRzDCaQlqpa7FgpGArLrLbgpj4I8JGUiaYWYDdrT+b1Pom43QXg7wU6dwlnbaIZDTy739F6xS07I2hrGhoGLDC7ADRYYAS2vrw3qj6jfYmpqQEh1HX2NFgcpTqWsl1w0pG9t7kqOvk59KZx37S6lrUjibEhJJJCTcld1NUOBlK5XElRttV5IMbVZUc9a44CjjaslYsyHJ6rHRrbV28rMHEKmbAFllJGszpsQWzGFI0LCEWaY1FQOINwbIZoRUSMLVo0TWOA/wCqt1LUBwwvNIU70+sewcqudJ3K8FKNVDSDeyWP191rBLamte/kpruBM1DPG2+FGGLa7aFMzbWKZrFpqmaiDTY12GLe5cvlARBvas2oSWtA6of/ABEIdHi06J4Ua1294z26K2MYGiwW3Osg6iqAVup8bq6iwVS1Otyj9QrbqrahUXKlrSmYll1F3dcMrSPVLd6inqwOqjdVXxh9Fqgv5gmLC14uDdefyageiI03VJGvG3r0T5+S/kuvjn4XSDRxJIA7i91eYYwxoA4Asqnppc6xsQVaIXHb5leX
                        0gC1Gs2hUnU9SLiQCm/iaqtexVPfNa5JUd6VxlMcISsrgBtHVL564k4UDMm5UVRjYRyoKpiMjKiqm3WEG1bLl21q1K2yzOA1blYtxLiZ6zMau2q
                        JhWfECICw5ZuQpnXImWYYCioSlzXoqGVNC0e1yYU8vQpTGUbFdNC0XK22Rwow9dNkwgXy5RrQeHrtrglgmXYmQ6xoHhadUWSt9XZBT1pR63DSo1IBK6jVieEG4l
                        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
                        RQoQ7JKLipwOFrWLq+kcb2sCe/9EPpumlty83PsnjgL5ULngLT2yIxNGNvPBKhqYLEXHPXmyIq7kA+oUkuRZFnMJANuhHyRbmBLIwWuTJjwQl1BjqNDVWnRyDzD5g7XfUZRQNly1+UglTdJIuWybhkbZAHf+Qz+qXajTOsGfCcCfzM8zP7fNWRwsbqQDqOqPWV3SdJELbXuTcucQbZ9VPK1xPldcfym/wBk9IUElMw/iY0nvbP1W8m4oWuVpJ2jzHgiyL8OzPYctOforW3R4L3Ebb9+qk/goxw1boshkuFMFw2MDgfddYWBDVUjXjse6RGjPxQBy3lWRbfECMgHvhbvGUrVpXulZFk3N3dwFBrOmRufdoI2i3lxcjkkq4/4VFcuAIJxcE3+61HpjRwfTIB/ZC8v2Mtn08V1ahMTjI125v59v4mjuR2XbrhjHslvdvJGAebWXqE3hCIlxLW+bkt3Nd7ZJVcrv+mzQD8MuIGWtMlhfsbNBsubfwdvY6cfNycrzfVZd3Lg6+Mde6i0Alr9zAS623dbNuMdivSZP+nsfwG/5DPig3NnyEWPP5uURpPgSKIh4fIDztwA0jvgn7ofw7NfmzWtPmDWNvi4N+mf+XQOsVDQwhrhfnuPmBbB4VypdEDmkPDbEWFucHqVAPB9PvBMTCOcknN+xNim/g1+4T+bP6eOaf4bqtRkd5drL23m4BH8pPP3XpGjeBKKhaDsEso/M4Xt7D91Z6fSCx5eZC7lrRYCwPAx2RIhB81hgX/r+6vj45Ijv5LqoonbmhrWgHI+iGijlczzYP3TmNgB9LXWndQqJgqehabk5xtI6e6OEYAsOFxTjaT2OVx8e59keewaecOA7LmYXsR6X9Vx8Qcj2UXxrAhMwypl8oPVCtmB5GULNUYWQVIvlD6YwgksUW9yHaRyo6iVCztZOHXQ8zVyZcKGOXKLCjJdtiooHkcqN8yhdOiwyqmAtZY2f1S+SfuhXVzf9Q+oQ63FlEncH7LbpAPTti6xYpGS/EBXTHBYsR4ze9ZdaWIcFhcoJib4K0sWBoSHqPp/RdtkF/v/AMKxYs0TNcFvcsWLcFouWwsWLVmj0XBOSsWIwGi3I9kBCd0jx0uPstrEZWMjYCwUb5FixCNUT+CFreBgLFicrky247WUPx+VixbooJ6v1QE2qMaDkm2Dta536D1WLEutcGTqGWvfcBsTzu6mwaPe5uPohqh9TkAMb2wXk9+2VixDtYM6nnLfNIQeb4A+VguaPSnON3yyED+cgfZYsWFYY5WsFgfqblRy17Rzf5NJP2CxYjdBwFUaza3+XMb4Fo3c/PhdSVExbdsf/wCnW/QFYsQmrRskDUr6qQ2c1kZubjLiAODfAN1qainLsyutY3a0NF/+611ixZgdRou8k+d9xw8vc0D0za6Ji0tzAGhjSAOevzwsWIC//9k=" alt="Dog" />
                        <CardTitle><h3>For the love of Space</h3></CardTitle>
                    </CardBody>
                    <CardText>
                        <div className="container">
                        <p>vdnaibrie br eobiieborengirenbpeiab be areuabnprunepau npnabn une nenbn un nfepgnruioepn e nepobn nreonqpo nn oepnqbinreiuqpninei q pn nein;gaoejgjqrpguhpruenqtbnp nnqenqpornequn on n npnbotrneoqphotjeoqhpotreqhntpeogjrpeoqnbvmreoam a mnnreoin rnb eq nnpqnnrtep n enpntnep;qbnn pn nnrtepoqhnprteoqnbjne;pqnrtepqbnoenb;tnblrnbtrnbtun i n brebnfa,jbrelaerltuinebnle n n uenlnreiuqnhltreublrtengnrvlrunelwhtnehltebglruiean 
                            nlerbrteblhbtreiu. vdnaibrie br eobiieborengirenbpeiab be areuabnprunepau npnabn une nenbn un nfepgnruioepn e nepobn nreonqpo nn oepnqbinreiuqpninei q pn nein;gaoejgjqrpguhpruenqtbnp nnqenqpornequn on n npnbotrneoqphotjeoqhpotreqhntpeogjrpeoqnbvmreoam a mnnreoin rnb eq nnpqnnrtep n enpntnep;qbnn pn nnrtepoqhnprteoqnbjne;pqnrtepqbnoenb;tnblrnbtrnbtun i n brebnfa,jbrelaerltuinebnle n n uenlnreiuqnhltreublrtengnrvlrunelwhtnehltebglruiean nlerbrteblhbtreiu.</p>
                        </div>
                    </CardText>
                </Card>
            </div>
        </React.Fragment>
        )
    }
}

export default AboutPage;