import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import home1 from "../assets/icons/home1.png";
import menu from "../assets/icons/menu.png";
import man from "../assets/icons/man.png";
import analytics from "../assets/icons/analytics.png";
import boy from "../assets/icons/boy.png";
import user from "../assets/icons/user.png";
import notes from "../assets/icons/notes.png";
import letter from "../assets/icons/letter.png";
import goal from "../assets/icons/goal.png";
import information from "../assets/icons/information.png";
import call from "../assets/icons/call.png";
import settings1 from "../assets/icons/settings1.png";
import login from "../assets/icons/login.png";

const Sidebar = () => {
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    console.log(path);
    return (
        <>
            <aside className="side--bar">
                <h3>Admin Menu</h3>
                <NavLink className={path == "/" ? "active" : ""} to="/">
                    <img src={analytics} />
                    Dashboard
                </NavLink>
                <NavLink className={path == "/admin" ? "active" : ""} to="/admin">
                    <img src={user} />
                    Profile
                </NavLink>
                <NavLink className={path == "/customers" ? "active" : ""} to="/customers">
                    <img src={man} />
                    Customers
                </NavLink>
                <NavLink className={path == "/add-product" ? "active" : ""} to="/add-product">
                    <img src={user} />
                    Add Products
                </NavLink>
                <NavLink className={path == "/view-product" ? "active" : ""} to="/view-product">
                    <img src={user} />
                    View Products
                </NavLink>
                <NavLink className={path == "/orders" ? "active" : ""} to="/orders">
                    <img src={user} />
                    Orders
                </NavLink>
                <NavLink className={path == "/delivered" ? "active" : ""} to="/delivered">
                    <img src={user} />
                    Delivery
                </NavLink>
                <NavLink className={path == "/about" ? "active" : ""} to="/about">
                    <img src={user} />
                    About
                </NavLink>
                <NavLink className={path == "/contact" ? "active" : ""} to="/contact">
                    <img src={user} />
                    Contact
                </NavLink>
                <NavLink className={path == "/settings" ? "active" : ""} to="/settings">
                    <img src={user} />
                    Settings
                </NavLink>
                <NavLink className={path == "/logout" ? "active" : ""} to="/logout">
                    <img src={user} />
                    Logout
                </NavLink>
            </aside>
        </>
    );
};

export default Sidebar;
