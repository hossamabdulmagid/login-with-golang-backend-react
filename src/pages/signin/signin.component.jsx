import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useEffect, useState} from "react";
import {DoLogin} from "../../redux/user/userAction";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const SignIn = ({DoLogin,LoggedIn}) => {
    let navigate = useNavigate();

    let [userInfo, UpdatedUserInfo] = useState({
        email: '',
        password: '',
    })


    useEffect(() => {
        if (LoggedIn) {
            return navigate("/");
        }
    }, [LoggedIn]);


    const handleChange = (e) => {
        const {name, value} = e.target;
        UpdatedUserInfo({...userInfo, [name]: value})
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        await DoLogin(userInfo)
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                name="email"
                                onChange={handleChange}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                name="password"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </header>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    LoggedIn: state.user.profile.user_id,
})
const mapDispatchToProps = dispatch => ({
    DoLogin: (userInfo) => dispatch(DoLogin(userInfo))
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);