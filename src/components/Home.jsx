import React, { useRef, useEffect, useState } from "react";
import user from "../assets/icons/user.png";
import cart from "../assets/icons/cart.png";
import analytics from "../assets/icons/analytics.png";
import man from "../assets/icons/man.png";
import buy from "../assets/icons/buy.png";
import sale from "../assets/icons/sale.png";
import plus from "../assets/icons/plus.png";
//import Notification from "./Notification";

const Home = () => {
    return (
        <>
            <main className="grid--two">
                <div id="left" className="row">
                    <div className="min-grid--two">
                        <div className="min-row">
                            <div className="center--row">
                                <img id="total--user" src={man} />
                                <h3 className="heading">Total Customer</h3>
                                <h2 className="count">35790 People</h2>
                            </div>
                        </div>
                        <div className="min-row">
                            <div className="center--row">
                                <img id="total--user" src={cart} />
                                <h3 className="heading">Total Orders</h3>
                                <h2 className="count">355 Orders</h2>
                            </div>
                        </div>
                        <div className="min-row">
                            <div className="center--row">
                                <img id="total--user" src={buy} />
                                <h3 className="heading">New Orders</h3>
                                <h2 className="count">53 Orders</h2>
                            </div>
                        </div>
                        <div className="min-row">
                            <div className="center--row">
                                <img id="total--user" src={sale} />
                                <h3 className="heading">Total Products</h3>
                                <h2 className="count">290 Products</h2>
                            </div>
                        </div>
                        <div className="min-row">
                            <div className="center--row">
                                <img id="total--user" src={plus} />
                                <h3 className="heading">New Products</h3>
                                <h2 className="count">20 Products</h2>
                            </div>
                        </div>
                        <div className="min-row">
                            <div className="center--row">
                                <img id="total--user" src={analytics} />
                                <h3 className="heading">Total Earnings</h3>
                                <h2 className="count">2490 Dollar</h2>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard--info">
                        <h2 className="heading">Business History</h2>
                        <div className="list--">
                            <li id="total--sell">
                                <div className="dashboard--icon">
                                    <img src={cart} />
                                    Total Sell
                                </div>
                                <span className="circle">87%</span>
                            </li>
                            <li id="total--order">
                                <div className="dashboard--icon">
                                    <img src={buy} />
                                    Total Orders
                                </div>
                                <span className="circle">54%</span>
                            </li>
                            <li id="total--earn">
                                <div className="dashboard--icon">
                                    <img src={user} />
                                    Total Earnings
                                </div>
                                <span className="circle">65%</span>
                            </li>
                            <li id="total--product">
                                <div className="dashboard--icon">
                                    <img src={user} />
                                    Total Products
                                </div>
                                <span className="circle">29%</span>
                            </li>
                            <li id="total--delivery">
                                <div className="dashboard--icon">
                                    <img src={user} />
                                    Total Delivered
                                </div>
                                <span className="circle">75%</span>
                            </li>
                        </div>
                    </div>
                </div>
                {/* Row Two Examples  */}
                <div id="right" className="row">
                    <h3 className="heading">Admin Description</h3>
                    <div className="right--hero">
                        <img src={cart} id="right--hero--img" />
                        <div className="right--hero--content">
                            This is my first time pass out on the terminal then
                            I can i use it for a while now i want to and I hope
                            you have a great day wish I could have been there
                            for a while now i want to use it for you can get it
                            done by me and response me know if you need anything
                            let me know and I'll send you a picture I'm a little
                            bit of a website using python pil only don't have to
                            do.
                        </div>
                    </div>
                    <h3 className="heading">Admin Description</h3>
                    <div className="right--hero">
                        <img src={buy} id="right--hero--img" />
                        <div className="right--hero--content">
                            This is my first time pass out on the terminal then
                            I can i use it for a while now i want to and I hope
                            you have a great day wish I could have been there
                            for a while now i want to use it for you can get it
                            done by me and response me know if you need anything
                            let me know and I'll send you a picture I'm a little
                            bit of a website using python pil only don't have to
                            do.
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
