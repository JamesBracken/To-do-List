import { useContext } from "react";
import { AuthContext } from "../components/authContext/AuthContext";
import { COGNITO_BASE_URL } from "../constants";
import config from "../config.json";

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("Context does not exist")
    const { tokens, setTokens, user, isAuthenticated } = context
    return { tokens, setTokens, user, isAuthenticated };
}

export const useHandleLogout = () => {
    const context = useContext(AuthContext)
    const codeVerifier = sessionStorage.getItem("codeVerifier");
    return () => {
        //Ensure clean auth state before login redirection
        if (context) {
            const { setTokens } = context;
            setTokens(null);
        }
        if (codeVerifier) sessionStorage.removeItem("codeVerifier")
        window.location.href = `${COGNITO_BASE_URL}logout?client_id=${config.amplify.userPoolClientId}&logout_uri=http%3A%2F%2Flocalhost%3A5173%2F`
    }

}