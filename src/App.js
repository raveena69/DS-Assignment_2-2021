import './css/App.css';
import {Switch} from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FirstPage from "./FirstPage";
import Home from "./Home";
import SignUpMain from "./SignUpMain";

function App() {

        return (
            // <div className="App">
            //     <FirstPage />
            // </div>
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <FirstPage />
                    </Route>
                    <Route exact path={"/home"}>
                        <Home />
                    </Route>
                    <Route exact path={"/signUpMain"}>
                        <SignUpMain />
                    </Route>
                </Switch>
            </Router>
        );
}

export default App;
