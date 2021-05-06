import React from 'react';
import './css/SignUpMain.css';
import cart from './images/shopping-cart.png';
import facebook from './images/facebook.png';
import youtube from './images/youtube.png';
import pinterest from './images/pinterest.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';

function SignUpMain() {
    return (
        <div>
            {/*Header Start*/}

            <div id="top-bar">
                <div id="top-bar1">
                    <img id="image" alt="cart" src={cart} width="70"/>
                    <div id="shopping">Shopping.com</div>
                    <a id="link" href="/firstPage"><div id="signUp"><div id="signUp1">Sign Up</div></div></a>
                    <a id="link" href="/firstPage"><div id="login"><div id="login1">Login</div></div></a>
                </div>
            </div>

            <div id="head">
                <div id="head1">
                    <div id="navigation-bar">
                        <a id="link" href="/home"><div id="welcome">Welcome</div></a>

                        <a id="link" href="/fashion"><div id="item">Items</div></a>
                        <a id="link" href="/home"><div id="cart">Shopping Cart</div></a>
                        <a id="link" href="/home"><div id="contact">About us</div></a>
                    </div>
                </div>
            </div>

            {/*Header End */}

            <div id="signUpMain-background">
                <div id="signUpMain-background1">

                    <a id="link" href="/home"><div id="customer-signUp">
                        <div id="customer-login">Customer Login</div>
                    </div>
                    </a>

                    <a id="link" href="/home"><div id="admin-signUp">
                        <div id="admin-login">Seller Login</div>
                    </div>
                    </a>

                </div>
            </div>

            {/*Footer Start*/}

            <div id="foot">
                <div id="foot1">

                    <div id="first">
                        <div id="shopping1">Shopping.com</div>
                    </div>

                    <div className="second">
                        <div id="address">Address</div>
                        <div className="address11">No:123/12,<br/>Galle Road,<br/>Colombo 06</div>
                    </div>

                    <div id="third">
                        <div id="tel">Tel:+94213452342<br/>shopping@gmail.com</div>

                        <div className="social">
                            <a href="https://www.facebook.com/" target="_blanck">
                                <div className="facebook"><img src={facebook} alt="" width="40"/></div>
                            </a>
                            <a href="https://www.youtube.com/" target="_blanck">
                                <div className="youtube"><img src={youtube} alt="" width="40"/></div>
                            </a>
                            <a href="https://www.pinterest.com/" target="_blanck">
                                <div className="pinterest"><img src={pinterest} alt="" width="40"/></div>
                            </a>
                            <a href="https://twitter.com/login?lang=en" target="_blanck">
                                <div className="twitter"><img src={twitter} alt="" width="50"/></div>
                            </a>
                            <a href="https://www.instagram.com" target="_blanck">
                                <div className="instagram"><img src={instagram} alt="" width="40"/></div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <div id="bottom-bar">
                <div id="bottom-bar1">
                    <div id="content">© 2021 Shopping.com Co. LLC. All Rights Reserved.</div>
                </div>
            </div>

            {/*Footer End*/}

        </div>
    );
}

export default SignUpMain;
