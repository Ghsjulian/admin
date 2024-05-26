import Layouts from "./layouts/Layouts";
import Home from "./pages/Home";
import AdminProfile from "./pages/AminProfile";
import UploadImg from "./test/UploadImg";
import Settings from "./components/Settings";
import Login from "./pages/Login";
import EditHero from "./pages/EditHero"
import Protect from "./protect/Protect";
/*
import MyContext from "./test/MyContext";
import UserProfile from "./pages/UserProfile";
import Chatbox from "./pages/Chatbox";
*/

const MyRoutes = [
    {
        path: "/",
        index: true,
        element: (
            <Protect>
                <Layouts>
                    <Home />
                </Layouts>
            </Protect>
        )
    },
    {
        path: "/admin",
        element: (
            <Protect>
                <Layouts>
                    <AdminProfile />
                </Layouts>
            </Protect>
        )
    },
    {
        path: "/upload",
        element: <UploadImg />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/settings",
        element: (
            <Protect>
                <Layouts>
                    <Settings />
                </Layouts>
            </Protect>
        )
    },
    {
        path: "/edit-hero-section",
        element: (
            <Protect>
                <Layouts>
                    <EditHero />
                </Layouts>
            </Protect>
        )
    }
];

export default MyRoutes;
