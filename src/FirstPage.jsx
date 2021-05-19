import './css/App.css';
import './css/FirstPage.css';
// import { Link } from 'react-router';
// import Home from "./Home";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function FirstPage() {

        return (
            <div>
                {/* First Page start */}
                <div id="body-background">
                    <div id="body-background1">

                        <div id="body-background2">
                            <div id="shoppingLable">Shopping.com</div>
                            <div id="real">With a one click get the real Online shopping experience with US</div>
                            <a id="link" href="/home" target="_blank"><div id="cilck-me">Click Me</div></a>
                        </div>

                    </div>
                </div>
                {/* First Page end */}
            </div>
        );
}

export default FirstPage;
