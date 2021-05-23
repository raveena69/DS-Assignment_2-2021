import './css/App.css';
import {Switch} from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';


import FirstPage from "./FirstPage";
import Home from "./Home";
import SignUpMain from "./SignUpMain";
import Fashion from "./Fashion";
import SearchItem from "./SearchItem";
import BuyerAddItem from "./BuyerAddItem";
import Cart from "./Cart";
import Navbar from "./Components/Navbar";





function App() {

        return (
            // <div className="App">
            //     <FirstPage />
            // </div>
            <Router>

                <Switch>
                    <Route exact path={"/"} >
                       <FirstPage/>
                    </Route>

                    <Route exact path={"/home"}  >
                        <Home/>
                    </Route>

                    <Route exact path={"/signUpMain"}  >
                        <SignUpMain/>
                    </Route>


                    <Route exact path={"/buyerAddItem"}  >
                        <BuyerAddItem/>
                    </Route>
                    <Route exact path={"/fashion"}  >
                        <Fashion/>
                    </Route>
                    <Route exact path={"/searchItem"}  >
                        <SearchItem/>
                    </Route>
                    <Route exact path={"/cart"}  >
                        <Cart/>
                    </Route>





                </Switch>
            </Router>
        );
}

export default App;
