import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useEffect, useState} from 'react';
import {DoSignup} from '../../redux/user/userAction'
import {connect} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {useToast} from '@chakra-ui/react';

const SignUp = ({DoSignup, LoggedIn}) => {
    const toast = useToast()

    let navigate = useNavigate();


    const [createUser, updatedCreateUser] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        Phone: ""
    });
    useEffect(() => {
        if (LoggedIn) {
            return navigate("/signin");
        }
    }, [LoggedIn]);


    const handleChange = (e) => {
        const {name, value} = e.target;
        updatedCreateUser({...createUser, [name]: value})
        console.log(createUser, `createuser While Typing`)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        await DoSignup(createUser, toast)
    }
    return (
        <>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        name="FirstName"
                        onChange={handleChange}
                    />

                    <Form.Text className="text-muted">
                        never share your Information with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        name="LastName"
                        onChange={handleChange}


                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        name="Email"
                        onChange={handleChange}


                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">


                    <Form.Control
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        name="Password"
                        onChange={handleChange}


                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="text"
                        placeholder="Phone"
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        name="Phone"
                        onChange={handleChange}

                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>

        </>
    )
}
const mapStateToProps = state => ({
    LoggedIn: state.user.profile.ID,
})
const mapDispatchToProps = dispatch => ({
    DoSignup: (createUser, toast) => dispatch(DoSignup(createUser, toast))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);