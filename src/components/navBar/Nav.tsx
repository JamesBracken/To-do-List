const Nav = () => {
    return (
        <>
            <nav>
                <button onClick={
                    () => {
                        window.location.href="https://eu-north-1dsoci5dtk.auth.eu-north-1.amazoncognito.com/login/continue?client_id=o817ick1fj45frs5gg42nv0sq&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&response_type=code&scope=email+openid+profile"
                    }
                }>Cognito login btn</button>
                <a href="">Signup</a>
            </nav>
        </>
    )
}

export default Nav;