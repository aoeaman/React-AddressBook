import * as React from "react";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Container from "./components/Container";

import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
export default function App() {
    return (
        <Router history={history}>
            <React.Fragment>
                <Header />
                <NavBar />
                <Container history={history}></Container>
            </React.Fragment>
        </Router>
    );
}
