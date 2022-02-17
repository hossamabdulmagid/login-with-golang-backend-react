import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from "react-bootstrap";
import logo from "../../logo.svg";
import Gologo from "../../golang-go7318.jpg";
import {connect} from 'react-redux';

const Header = ({user}) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} className="App-logo-navbar" alt="logo"/>
                        <img src={Gologo} className="App-logo-navbar" alt="logogo"/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {user ? <Nav.Link href="/signin">logout</Nav.Link> :
                            <>
                                <Nav.Link href="/signin">Login</Nav.Link>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

const mapStateToProps = state => ({
    user: state.user.profile.ID
})
export default connect(mapStateToProps)(Header);