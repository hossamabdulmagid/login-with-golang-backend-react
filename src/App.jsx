import './App.css';
import HomepageComponent from './pages/homepage/homepage.component'
import {Route, Routes} from "react-router-dom";
import Header from "./components/navbar/navbar.component";
import SignIn from "./pages/signin/signin.component";
import SignUp from './pages/signup/signup.component'

const App = () => {
    return (
        <>
            <Header/>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path={'/'} exact element={<HomepageComponent/>}/>
                        <Route path={'/signin'} element={<SignIn/>}/>
                        <Route path={'/signup'} element={<SignUp/>}/>
                    </Routes>
                </header>
            </div>
        </>

    );
}

export default App;
