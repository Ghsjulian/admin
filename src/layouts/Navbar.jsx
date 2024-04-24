import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

/*<----ICONS---->*/
import home1 from "../assets/icons/home1.png";
import user from "../assets/icons/user.png";
import messenger from "../assets/icons/messenger.png";
import notification from "../assets/icons/notification.png";
import option from "../assets/icons/option.png";
import burger_menu from "../assets/icons/burger_menu.png";
import settings1 from "../assets/icons/settings1.png";
import cancel from "../assets/icons/cancel.png";

const Navbar = () => {
    const [isMobile, setisMobile] = useState(false);
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
            <nav className="nav--bar">
                <h3 className="logo">Admin Dashboard</h3>
                <div className="user--area">
                    <NavLink onClick={notificationBelll} id="bell" to="bell">
                        <img src={notification} />
                    </NavLink>
                    <NavLink to="/admin">
                        <img src={user} />
                    </NavLink>
                    <NavLink to="/settings">
                        <img src={settings1} />
                    </NavLink>
                    <NavLink onClick={mobileMenu} id="nav--btn" to="menu">
                        <img src={isMobile ? cancel : burger_menu} />
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
