import logo from "../../logo.svg";
import Gologo from "../../golang-go7318.jpg";
import Header from '../../components/navbar/navbar.component'

const HomepageComponent = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">

                    <p>
                        <img src={Gologo} className="App-logo" alt="logogo"/>

                        <img src={logo} className="App-logo" alt="logo"/>
                    </p>
                    <h1>
                        Welcome to Our App
                    </h1>
                    <p>
                        Authentication in Golang with JWT and mongoDB and React
                    </p>
                </header>
            </div>
        </>
    )
}


export default HomepageComponent;