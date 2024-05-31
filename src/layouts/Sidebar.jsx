import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import home1 from "../assets/icons/home1.png";
import menu from "../assets/icons/menu.png";
import man from "../assets/icons/man.png";
import staff from "../assets/icons/staff.png";
import tools from "../assets/icons/tools.png";
import analytics from "../assets/icons/pie-chart.png";
import boy from "../assets/icons/boy.png";
import user from "../assets/icons/user.png";
import notes from "../assets/icons/notes.png";
import letter from "../assets/icons/letter.png";
import goal from "../assets/icons/goal.png";
import information from "../assets/icons/information.png";
import call from "../assets/icons/call.png";
import settings1 from "../assets/icons/settings1.png";
import login from "../assets/icons/login.png";
import cancel from "../assets/icons/cancel.png";
import burger_menu from "../assets/icons/burger_menu.png";
import lightbulb from "../assets/icons/lightbulb.png";
import megaphone from "../assets/icons/megaphone.png";
import sswitch from "../assets/icons/switch.png";
import permission from "../assets/icons/permission.png";

const Sidebar = ({ res }) => {
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location]);
    const side = useRef(null);
    const hideMenu = e => {
        document.querySelector(".side--bar").classList.remove("mobile--menu");
        document.querySelector("#mobile--menu").src = burger_menu;
    };
    const subRef = useRef(null);
    const subMenu = e => {
        e.preventDefault();
        subRef.current.classList.toggle("sub-menu");
    };
    return (
        <>
            <aside ref={side} className="side--bar">
                <h3>Admin Menu</h3>
                <NavLink
                    onClick={hideMenu}
                    className={path == "/" ? "active" : ""}
                    to="/"
                >
                    <img src={analytics} />
                    Dashboard
                </NavLink>
                <NavLink
                    onClick={hideMenu}
                    className={path == "/admin" ? "active" : ""}
                    to="/admin"
                >
                    <img src={permission} />
                    Admin
                </NavLink>
                <NavLink
                    onClick={hideMenu}
                    className={path == "/customers" ? "active" : ""}
                    to="/clients"
                >
                    <img src={man} />
                    Clients
                </NavLink>

                <NavLink
                    id="sub-menu"
                    onClick={e => {
                        subMenu(e);
                    }}
                    className={path == "/ghs" ? "active" : ""}
                    to="#"
                >
                    <img src={tools} />
                    Customize Site
                </NavLink>
                <ul ref={subRef} className="sub">
                    <NavLink
                        className={path == "/add-blog" ? "sub-active" : ""}
                        to="/add-blog"
                    >
                        <img src={megaphone} />
                        Add/Edit Blog
                    </NavLink>
                    <NavLink
                        className={
                            path == "/edit-hero-section" ? "sub-active" : ""
                        }
                        to="/edit-hero-section"
                    >
                        <img src={megaphone} />
                        Edit Hero Section
                    </NavLink>
                    <NavLink to="#">
                        <img src={information} />
                        Edit About Section
                    </NavLink>
                    <NavLink to="#">
                        <img src={call} />
                        Edit Contact Section
                    </NavLink>
                    <NavLink to="#">
                        <img src={goal} />
                        Edit Service Section
                    </NavLink>
                    <NavLink to="#">
                        <img src={staff} />
                        Edit Staff Section
                    </NavLink>
                    <NavLink to="#">
                        <img src={man} />
                        Edit Client Section
                    </NavLink>
                    <NavLink to="#">
                        <img src={lightbulb} />
                        Edit Project Section
                    </NavLink>
                </ul>
                <NavLink
                    onClick={hideMenu}
                    className={path == "/settings" ? "active" : ""}
                    to="/settings"
                >
                    <img src={settings1} />
                    Settings
                </NavLink>
                <NavLink
                    onClick={hideMenu}
                    className={path == "/logout" ? "active" : ""}
                    to="/logout"
                >
                    <img src={sswitch} />
                    Logout
                </NavLink>
            </aside>
        </>
    );
};

export default Sidebar;
