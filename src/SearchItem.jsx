
import React from 'react';
import './css/SearchItem.css';

import cart from "./images/shopping-cart.png";
import Navbar from "./Components/Navbar";


function SearchItem() {
    return (


<div>
        <div id="top-bar" >
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
                <a id="link" href="/cart"><div id="cart">Shopping Cart</div></a>
                <a id="link" href="/home"><div id="contact">About us</div></a>
            </div>
        </div>
    </div>
    <Navbar/>
        <div className="wrapper">

    <div className="main_content">
        <div className="header">Search Page</div>
        <div className="page-wrapper bg-img-1 p-t-200 p-b-120">
            <div className="wrapper wrapper--w900">
                <div className="card card-4">
                    <div className="card-body">

                        <div className="tab-content">
                            <div className="tab-pane active" id="tab1">
                                <form action=""  id="form">
                                    <div className="input-group input-group-big">
                                        <label className="label">Item Name </label>
                                        <input className="input--style-1" type="text" name="SerialNo" placeholder="" required="required"/>
                                            <i className="zmdi zmdi-search input-group-symbol"></i>
                                    </div>

                                    <div className="col-2">
                                        <button className="btn-submit" type="submit">search</button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
</div>



);
}

export default SearchItem;


