import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from "react-bootstrap";
import logo from "../../logo.svg";
import Gologo from "../../golang-go7318.jpg";
import {connect} from 'react-redux';
import {SignOut} from "../../redux/user/userAction";
import {useEffect} from "react";

const Header = ({user, SignOut}) => {
    useEffect(() => {

    }, [user])
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} className="App-logo-navbar" alt="logo"/>
                        <img src={Gologo} className="App-logo-navbar" alt="logoGo"/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {user ? <Nav.Link onClick={SignOut}>logout</Nav.Link> :
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

const mapDispatchToProps = dispatch => ({
    SignOut: () => dispatch(SignOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);