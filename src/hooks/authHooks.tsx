import { useContext } from "react";
import { AuthContext } from "../components/authContext/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("Context does not exist")
    const { tokens, setTokens, user, isAuthenticated } = context
    return { tokens, setTokens, user, isAuthenticated };
}

export const useClearAuthContext = () => {
    const context = useContext(AuthContext)
    if (context) {
        const { setTokens } = context;
        setTokens(null);
    }
}