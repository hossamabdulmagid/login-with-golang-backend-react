import logo from "../../logo.svg";
import Gologo from "../../golang-go7318.jpg";
import {connect} from 'react-redux';
import {useEffect, useState} from "react";

const HomepageComponent = ({user, LoggedIn}) => {
    let [userDisplayInformation, SetUserDisplayInformation] = useState(false);


    useEffect(() => {
        if (LoggedIn) {
            SetUserDisplayInformation(true);
        }
    }, [])

    return (
        <>
            <div className="App">
                <header className="App-header">

                    <p>
                        <img src={logo} className="App-logo" alt="logo"/>

                        <img src={Gologo} className="App-logo" alt="go-logo"/>

                    </p>
                    <h1>
                        Welcome to Our App
                    </h1>
                    <p>
                        <code> Authentication </code> in <code>Golang</code> with <code>JWT</code> and <code>mongoDB</code> and <code>React</code>
                    </p>
                    {LoggedIn ?
                        <>

                            <p>
                                <code> Email: </code>

                                { user.Email}
                            </p>
                            <p>
                                <code> FirstName: </code>

                                { user.FirstName}

                            </p>
                            <p>
                                <code> LastName: </code>
                                { user.LastName}

                            </p>


                        </>
                        : null}
                </header>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    user: state.user.profile,
    LoggedIn: state.user.profile.UserId,


})

export default connect(mapStateToProps, null)(HomepageComponent);