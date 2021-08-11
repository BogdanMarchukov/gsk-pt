import React from "react"
import 'materialize-css'
import Layout from "./Layout/Layout";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import OptionsPage from "./pages/OptionsPage/OptionsPage";
import RpInfo from "./pages/RpInfo/RpInfo";
import FactRp from "./pages/FactRp/FactRp";
import EditRp from "./pages/EditRp/EditRp";



function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact>
                        <HomePage/>
                    </Route>
                    <Route path='/options' exact>
                        <OptionsPage/>
                    </Route>
                    <Route path='/rp' exact>
                        <RpInfo/>
                    </Route>
                    <Route path='/fact' exact>
                        <FactRp/>
                    </Route>
                    <Route path='/edit-rp' exact>
                        <EditRp/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
