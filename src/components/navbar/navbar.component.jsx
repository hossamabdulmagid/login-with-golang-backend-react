import Navbar from 'react-bootstrap/Navbar'
import { Container} from "react-bootstrap";
import {Nav} from 'react-bootstrap'
import logo from "../../logo.svg";
import Gologo from "../../golang-go7318.jpg";
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} className="App-logo-navbar" alt="logo"/>
                        <img src={Gologo} className="App-logo-navbar" alt="logogo"/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/signin">Login</Nav.Link>
                        <Nav.Link href="/signup">Signup</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;