import useAuth from "../../hooks/useAuth";
// import { COGNITO_LOGIN_URL } from "../../constants";
import { generatePKCECredentials } from "../../PKCEHelper";
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, tokens } = useAuth();
    // console.log("does tokens exist", !tokens.error)
    // console.log("tokens !== null", tokens !== null)
    // console.log("!isAuthenticated", !isAuthenticated)
    // if (!isAuthenticated && tokens !== null && !tokens.error) {

    // TEMPORARILY COMMENTING OUT, UNNECESSARY FEATURE FOR THE MOMENT
    // if (!tokens || tokens.error) {
    //     console.log("if invoking")
    //     const PKCECredentials = generatePKCECredentials();
    //     // Disabling eslint incorrect error 
    //     // eslint-disable-next-line react-hooks/rules-of-hooks
    //     window.location.href = `https://eu-north-1dsoci5dtk.auth.eu-north-1.amazoncognito.com/login/continue?client_id=o817ick1fj45frs5gg42nv0sq&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth-callback&response_type=code&scope=email+openid+profile&code_challenge=${PKCECredentials}&code_challenge_method=S256`

    //     return null
    // }
    return children;
}

export default ProtectedRoute;