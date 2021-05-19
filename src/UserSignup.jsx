import React from 'react';
import './css/UserSignup.css';

export default class UserSignup extends React.Component {


    render() {
        return (
            <div className={"container"}>
                <div className={"form"}>
                    <div className={"heading"}>
                        <h1>Registration form</h1>
                    </div>
                    <div className={"wrap"}>
                        <div className={"f1"}>
                            <label>First Name</label>
                            <input type={"text"}/>
                            <span className={"focus-input"}></span>
                        </div>
                        <div className={"f2"}>
                            <label>Last Name</label>
                            <input type={"text"}/>
                            <span className={"focus-input"}></span>
                        </div>
                    </div>
                    <div className={"wrap2"}>
                        <label>Username</label>
                        <input type={"text"}/>
                        <span className={"focus-input2"}></span>
                    </div>
                    <div className={"wrap2"}>
                        <label>E-mail</label>
                        <input type={"text"}/>
                        <span className={"focus-input2"}></span>
                    </div>
                    <div className={"wrap2"}>
                        <label>Phone Number</label>
                        <input type={"number"}/>
                        <span className={"focus-input2"}></span>
                    </div>
                    <button className={"btn"}>Register</button>
                </div>

                <div className={"image"}>
                    <img className={"img"} alt={""}/>
                </div>


            </div>
        )

    }
};