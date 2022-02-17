import logo from "../../logo.svg";
import Gologo from "../../golang-go7318.jpg";

const HomepageComponent = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">

                    <p>
                        <img src={Gologo} className="App-logo" alt="go-logo"/>

                        <img src={logo} className="App-logo" alt="logo"/>
                    </p>
                    <h1>
                        Welcome to Our App
                    </h1>
                    <p>
                        <code> Authentication </code> in <code>Golang</code> with <code>JWT</code> and <code>mongoDB</code> and <code>React</code>
                    </p>
                </header>
            </div>
        </>
    )
}


export default HomepageComponent;