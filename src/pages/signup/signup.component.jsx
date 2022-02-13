import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = () => {
    return (
        <>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Control
                                type="email"
                                placeholder="First Name"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
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
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="number"
                                placeholder="Phone"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SignUp
                        </Button>
                    </Form>

        </>
    )
}
export default SignUp;