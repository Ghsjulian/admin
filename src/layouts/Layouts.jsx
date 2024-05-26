import { Outlet } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Notification from "../components/Notification";
import "../assets/css/page.css";
import "../assets/css/Layout.css";
import "../assets/css/index.css";
import cancel from "../assets/icons/cancel.png";
import burger_menu from "../assets/icons/burger_menu.png";

const Layouts = ({ children }) => {
    const [isMobile, setisMobile] = useState(true);
    const mobileMenu = e => {
        e.preventDefault();
        isMobile ? setisMobile(false) : setisMobile(true);
        document.querySelector(".side--bar").classList.toggle("mobile--menu");
        
    };
    const notificationBelll = e => {
        e.preventDefault();
        let isOpen = document.querySelector("#popup").getAttribute("isOpen");
        if (isOpen === "false") {
            document.querySelector("#popup").style.display = "block";
            document.querySelector("#popup").classList.add("pop");
            document.querySelector("#popup").setAttribute("isOpen", "true");
        } else {
            document.querySelector("#popup").style.display = "none";
            document.querySelector("#popup").classList.remove("pop");
            document.querySelector("#popup").setAttribute("isOpen", "false");
        }
    };
    return (
        <>
            <Navbar res={{ isMobile, mobileMenu, notificationBelll }} />
            <Sidebar res={{ isMobile, mobileMenu }} />
            <Notification />
            {children}
        </>
    );
};

export default Layouts;
