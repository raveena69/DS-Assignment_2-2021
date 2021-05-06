import './css/App.css';
import FirstPage from "./FirstPage";
import {Switch} from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Home";

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
                </Switch>
            </Router>
        );
}

export default App;
