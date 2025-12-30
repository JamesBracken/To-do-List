import { useAuth } from "../hooks/authHooks";

const Home = () => {
    const { tokens } = useAuth();
    console.log("tokens:", tokens)
    console.log("session verifier", sessionStorage.getItem("codeVerifier"))
    return (
        <>
            <h1>Home Page</h1>
        </>
    )

}

export default Home;