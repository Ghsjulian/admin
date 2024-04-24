import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Notification from "../components/Notification";
import "../assets/css/Layout.css";
import "../assets/css/index.css";

const Layouts = ({ children }) => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Notification />
            {children}
        </>
    );
};

export default Layouts;
