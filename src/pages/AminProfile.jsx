import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import "../assets/css/Admin.css";
import boy from "../assets/icons/boy.png";
import gallary from "../assets/icons/gallary.png";
import heart_outline from "../assets/icons/heart_outline.png";
import plane from "../assets/icons/plane.png";
import comment_1 from "../assets/icons/comment_1.png";
import share from "../assets/icons/share.png";
import __api__ from "../assets/js/Requester.js";
import { useAuth } from "../context/useAuth";

const AminProfile = () => {
    const { userId, token } = useAuth();
    return (
        <>
            <main className="page">
                <div className="admin--profile">
                    <div className="grid--center">
                        <div className="one--box">
                            <img src={boy} />
                            <h2 id="name">Ghs Julian</h2>
                            <span>admin@gmail.com</span>
                            <p id="description">
                                This Is Admin Access the website and customize
                                your website here. If you're admin, you have
                                full access to customize clients or the website
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AminProfile;
