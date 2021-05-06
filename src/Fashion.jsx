import React from 'react';
import './css/Fashion.css';
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

            <div id="top-bar" >
                <div id="top-bar1">
                    <img id="image" alt="cart" src={cart} width="70"/>
                    <div id="shopping">Shopping.com</div>
                    <a id="link" href="/signUpMain"><div id="signUp"><div id="signUp1">Sign Up</div></div></a>
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
            <div id="out-background">
                <div id="fashion-content">Fashion</div>
            </div>

            <div id="fashion-ads-background">
                <div id="fashion-ads-background1">

                    {/*Women Fashion Start*/}
                    <div id="women1">
                        <img id="out-border" alt="" src="./images/women1.png" width="300"/>
                            <div id="women-price">US$29.00</div>
                    </div>

                    <div id="women2">
                        <img id="out-border" alt="" src="images/women2.png" width="300"/>
                            <div id="women-price">US$40.00</div>
                    </div>

                    <div id="women3">
                        <img id="out-border" alt="" src="images/women3.png" width="300"/>
                            <div id="women-price">US$20.00</div>
                    </div>

                    <div id="women4">
                        <img id="out-border" alt="" src="images/women4.png" width="300"/>
                            <div id="women-price">US$27.00</div>
                    </div>

                    <div id="women5">
                        <img id="out-border" alt="" src="images/women5.png" width="300"/>
                            <div id="women-price">US$39.00</div>
                    </div>

                    <div id="women6">
                        <img id="out-border" alt="" src="images/women6.png" width="300"/>
                            <div id="women-price">US$49.00</div>
                    </div>

                    <div id="women7">
                        <img id="out-border" alt="" src="images/women7.png" width="300"/>
                            <div id="women-price">US$50.00</div>
                    </div>

                    <div id="women8">
                        <img id="out-border" alt="" src="images/women8.png" width="300"/>
                            <div id="women-price">US$20.00</div>
                    </div>

                    <div id="women9">
                        <img id="out-border" alt="" src="images/women9.png" width="300"/>
                            <div id="women-price">US$15.00</div>
                    </div>

                    <div id="women10">
                        <img id="out-border" alt="" src="images/women10.png" width="300"/>
                            <div id="women-price">US$19.00</div>
                    </div>

                    <div id="women11">
                        <img id="out-border" alt="" src="images/women11.png" width="300"/>
                            <div id="women-price">US$29.00</div>
                    </div>

                    <div id="women12">
                        <img id="out-border" alt="" src="images/women12.png" width="300"/>
                            <div id="women-price">US$40.00</div>
                    </div>

                    <div id="women13">
                        <img id="out-border" alt="" src="images/women13.png" width="300"/>
                            <div id="women-price">US$39.00</div>
                    </div>

                    <div id="women14">
                        <img id="out-border" alt="" src="images/women14.png" width="300"/>
                            <div id="women-price">US$24.00</div>
                    </div>

                    <div id="women15">
                        <img id="out-border" alt="" src="images/women15.png" width="300"/>
                            <div id="women-price">US$35.00</div>
                    </div>

                     {/*Women Fashion End*/}

                     {/*Men Fashion Start*/}

                    <div id="men1">
                        <img id="out-border" alt="" src="images/men1.jpeg" width="300" height="400"/>
                            <div id="men-price">US$29.00</div>
                    </div>

                    <div id="men2">
                        <img id="out-border" alt="" src="images/men2.jpeg" width="300" height="400"/>
                            <div id="men-price">US$40.00</div>
                    </div>

                    <div id="men3">
                        <img id="out-border" alt="" src="images/men3.jpeg" width="300" height="400"/>
                            <div id="men-price">US$20.00</div>
                    </div>

                    <div id="men4">
                        <img id="out-border" alt="" src="images/men4.jpeg" width="300" height="400"/>
                            <div id="men-price">US$27.00</div>
                    </div>

                    <div id="men5">
                        <img id="out-border" alt="" src="images/men5.jpeg" width="300" height="400"/>
                            <div id="men-price">US$39.00</div>
                    </div>

                    <div id="men6">
                        <img id="out-border" alt="" src="images/men6.jpeg" width="300" height="400"/>
                            <div id="men-price">US$49.00</div>
                    </div>

                    <div id="men7">
                        <img id="out-border" alt="" src="images/men7.jpeg" width="300" height="400"/>
                            <div id="men-price">US$50.00</div>
                    </div>

                    <div id="men8">
                        <img id="out-border" alt="" src="images/men8.jpeg" width="300" height="400"/>
                            <div id="men-price">US$20.00</div>
                    </div>

                    <div id="men9">
                        <img id="out-border" alt="" src="images/men9.jpeg" width="300" height="400"/>
                            <div id="men-price">US$15.00</div>
                    </div>

                    <div id="men10">
                        <img id="out-border" alt="" src="images/men10.jpeg" width="300" height="400"/>
                            <div id="men-price">US$19.00</div>
                    </div>

                    <div id="men11">
                        <img id="out-border" alt="" src="images/men11.jpeg" width="300" height="400"/>
                            <div id="men-price">US$29.00</div>
                    </div>

                    <div id="men12">
                        <img id="out-border" alt="" src="images/men12.jpeg" width="300" height="400"/>
                            <div id="men-price">US$40.00</div>
                    </div>

                    <div id="men13">
                        <img id="out-border" alt="" src="images/men13.jpeg" width="300" height="400"/>
                            <div id="men-price">US$39.00</div>
                    </div>

                    <div id="men14">
                        <img id="out-border" alt="" src="images/men14.jpeg" width="300" height="400"/>
                            <div id="men-price">US$24.00</div>
                    </div>

                    <div id="men15">
                        <img id="out-border" alt="" src="images/men15.jpeg" width="300" height="400"/>
                            <div id="men-price">US$35.00</div>
                    </div>

                     {/*Men Fashion End*/}

                    <div id="last-shopping-cart">
                        <div id="add-cart">Add to shopping Cart</div>
                        <a id="link" href="/home"><div id="shopping-cart">Shopping Cart</div></a>
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

export default SignUpMain;
