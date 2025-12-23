import { Link } from "react-router-dom";
import { handleLogin } from "../../authHandlers";
import { useAuth } from "../../hooks/authHooks";
import { useHandleLogout } from "../../hooks/authHooks";

const Nav = () => {
    const context = useAuth();
    const { isAuthenticated, user } = context;
    const logout = useHandleLogout();
    if (isAuthenticated && user) {
        return (
            <>
                <nav>
                    <p>Hi {user["cognito:username"]}</p>
                    <Link to="/">Home</Link>
                    <a onClick={() => logout()}>Logout</a>
                </nav>
            </>
        )
    } else {
        return (
            <>
                <nav>
                    <Link to="/">Home</Link>
                    <button onClick={() => handleLogin()}>Cognito login btn</button>
                    <a href="">Signup</a>
                </nav>
            </>
        )
    }
}

export default Nav;