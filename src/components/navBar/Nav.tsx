import { Link } from "react-router-dom";
import { handleLogin, handleLogout } from "../../authHandlers";

const Nav = () => {

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <button onClick={() => handleLogin()}>Cognito login btn</button>
                <a href="">Signup</a>
                <a onClick={() => handleLogout()}>Logout</a>
            </nav>
        </>
    )
}

export default Nav;