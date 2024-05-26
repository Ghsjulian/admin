import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import boy from "../assets/icons/boy.png";
import cancel from "../assets/icons/cancel.png";
import axios from "axios";

const Settings = () => {
    const popRef = useRef(null);
    const mainRef = useRef(null);
    const overRef = useRef(null);
    const headRef = useRef(null);
    const [isnewPassword, setisnewPassword] = useState(false);
    const popBox = type => {
        if (type === "CHANGE_PASSWORD") {
            setisnewPassword(true);
            overRef.current.style.display = "block";
            popRef.current.style.opacity = "1";
            popRef.current.classList.add("pop--box");
            headRef.current.textContent = "Change Password ";
        } else {
            setisnewPassword(false);
            overRef.current.style.display = "block";
            popRef.current.style.opacity = "1";
            popRef.current.classList.add("pop--box");
            headRef.current.textContent = type;
        }
    };
    const closePopup = () => {
        overRef.current.style.display = "none";
        popRef.current.style.opacity = "0";
        popRef.current.classList.remove("pop--box");
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const handleFileChange = event => {
        setSelectedFile(event.target.files[0]);
        const formData = new FormData();
        formData.append("image", selectedFile);
        axios
            .post(`${process.env.API_URL}/admin/edit-settings`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response => {
                setImageUrl(response.data.imageUrl);
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <main ref={mainRef} className="page">
            <h2>Change Admin Settings</h2>
            <div className="grid--center">
                <div className="one--box">
                    <img
                        src={imageUrl ? imageUrl : boy}
                        className="profile-picture"
                    />
                    <label htmlFor="profile-picture">
                        Change Profile Picture
                    </label>
                    <input
                        onChange={handleFileChange}
                        type="file"
                        accept="image/*"
                        id="profile-picture"
                    />
                    <label
                        onClick={() => {
                            popBox("Change Admin Name");
                        }}
                    >
                        Change Admin Name
                    </label>
                    <label
                        onClick={() => {
                            popBox("CHANGE_PASSWORD");
                        }}
                    >
                        Change Password
                    </label>
                    <div ref={popRef} className="pop--">
                        <h3 ref={headRef}></h3>
                        <img onClick={closePopup} src={cancel} id="cancel" />
                        <input type="text" placeholder="Change Admin Name" />
                        <input
                            style={{
                                display: isnewPassword ? "block" : "none"
                            }}
                            type="password"
                            placeholder="Enter New Password"
                        />
                        <button className="submit">SUBMIT</button>
                    </div>
                    {/*
                    <li>
                        <NavLink to="/">Edit Profile Picture</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Change Admin Password</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Edit Admin Name</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Edit Admin Email</NavLink>
                    </li>
                    */}
                </div>
            </div>
            <div ref={overRef} className="overlay"></div>
        </main>
    );
};

export default Settings;
