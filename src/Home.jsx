import React from 'react';
// import FirstPage from './FirstPage';
import './css/Home.css';
import video1 from "./videos/How Online Shopping Works1.mp4";
import cart from './images/shopping-cart.png';
import facebook from './images/facebook.png';
import youtube from './images/youtube.png';
import pinterest from './images/pinterest.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
// import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

function Home() {
    return (
        <div>
            {/*Header Start*/}

            <div id="top-bar">
                <div id="top-bar1">
                    <img id="image" alt="cart" src={cart} width="70"/>
                    <div id="shopping">Shopping.com</div>
                    <a id="link" href="/signUpMain"><div id="signUp"><div id="signUp11">Sign Up</div></div></a>
                    <a id="link" href="/firstPage"><div id="login"><div id="login11">Login</div></div></a>
                </div>
            </div>

            <div id="head">
                <div id="head1">
                    <div id="navigation-bar">
                        <a id="link" href="/home"><div id="welcome">Welcome</div></a>
                        <a id="link" href="/fashion"><div id="item">Items</div></a>
                        <a id="link" href="/home"><div id="cart">Shopping Cart</div></a>

                            <a id="link" href="/home"><div id="contact">About Us</div></a>
                    </div>
                </div>
            </div>

            {/*Header End */}

            <div className="body-background">
                <div className="body-background1">

                    <div id="first-section">
                        <div id="first-content-bar">

                            <div id="content1">Welcome to Shopping.com World !!!!</div>
                            <div id="content2">Grab Your favorite items with amazing prices</div>
                        </div>

                        <div id="second-background">
                            <video width="580" autoPlay loop muted> {/*autoplay*/}
                                <source src={video1} width="600" type="video/mp4"/>
                            </video>
                        </div>
                    </div>

                    {/*<div id="slide-bar">*/}
                    {/*    <img name="slide" alt="cart" width="750" height="300"/>*/}
                    {/*</div>*/}

                    <div id="vision-mission-background">
                        <div id="vision-background">
                            <div id="vision">Vision</div>
                            <div id="vision-content">To become the national online stationery shopping portal of choice,
                                while maintaining a localised service offering. To create social responsibility
                                programmes with our customers to uplift the local communities we operate in by donating
                                the products to educate and enhance their future. To sponsor at least 1 local
                                underprivileged school goer with fundamental stationery throughout their studies.
                            </div>
                        </div>

                        <div id="mission-background">
                            <div id="mission">Mission</div>
                            <div id="mission-content">To offer YOU an easy to use online solution for stationery
                                purchasing , coupled with localized personal involvement for both the client and the
                                community.Mission Statement - To offer an online, easy to use, cost effective, quality
                                guaranteed, service orientated stationery purchasing method for school goers, personal
                                and small business. Locally based service and community responsibility, coupled with
                                purchasing convenience are the cornerstones of our business model.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div id="ads-background">

                <div id="ads9"></div>
                <div id="ads10"></div>
                <div id="ads11"></div>
                <div id="ads13">
                    <div id="ads13-image">
                    </div>

                    <div id="last-contact-us">
                        <div id="get-details">Contact Us to get more details</div>
                        <a id="link" href="/home"><div id="get-contact-us">Contact Us</div></a>
                    </div>

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

export default Home;
