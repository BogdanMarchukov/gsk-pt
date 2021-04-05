import React from "react"
import 'materialize-css'
import Layout from "./Layout/Layout";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact>
                        <HomePage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
