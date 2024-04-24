import Layouts from "./layouts/Layouts";
import Home from "./components/Home";

/*
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Protect from "./protect/Protect";
import MyContext from "./test/MyContext";
import UserProfile from "./pages/UserProfile";
import Chatbox from "./pages/Chatbox";
*/

const MyRoutes = [
    {
        path: "/",
        index: true,
        element: (
                <Layouts>
                    <Home />
                </Layouts>
        )
    }
];

export default MyRoutes;
