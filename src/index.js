import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ChakraProvider>
                <App/>

            </ChakraProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();