import React from 'react';
import './Navbar.css';
import {SellerNavbarData} from './SellerNavbarData';

function SellerNavbar() {
    return (

        <div className="app">

            <div className="sidebar">
                <ul className="SidebarList">
                    {SellerNavbarData.map((val, key)=>{
                        return(
                            <li
                                key={key}
                                className="row"
                                id={window.location.pathname == val.link ? "active" : ""}
                                onClick={()=> {
                                    window.location.pathname= val.link;
                                }}
                            >

                                <div id= "icon">{val.icon}</div><div id="title">{val.title}
                            </div>
                            </li>
                        );
                    })},

                </ul>

            </div>
        </div>
    );
}
export default SellerNavbar;