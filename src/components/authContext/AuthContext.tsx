import { jwtDecode, type JwtPayload } from "jwt-decode";
import { useState } from "react";
import { createContext } from "react";
import { isTokenExpired } from "../../authHelper";

type AuthContextType = {
    tokens: Tokens | null,
    setTokens: React.Dispatch<React.SetStateAction<Tokens | null>>,
    user: CognitoTokenPayload | User | null,
    isAuthenticated: boolean
}

type Tokens = {
    access_token: string,
    expires_in: number,
    id_token: string,
    refresh_token: string,
    token_type: string,
    error?: string
}

type User = {
    sub: string,
    email: string,
    email_verified: boolean,
    "cognito:username": string,
    auth_time: number,
    exp: number
}

type CognitoTokenPayload = JwtPayload | User | null;

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }) => {
    const [tokens, setTokens] = useState<Tokens | null>(null)
    const user = tokens?.id_token && !tokens.error ? jwtDecode(tokens.id_token) : null;
    if (tokens !== null && user?.exp === null) throw new Error("Tokens present but user authentication expiry not found")

    console.log("User:", user)
    let isAuthTokenExpired = false;
    if (user && user.exp) {
        isAuthTokenExpired = isTokenExpired(user?.exp);
    }
    const isAuthenticated = isAuthTokenExpired;
    return (
        <AuthContext value={{ tokens, setTokens, user, isAuthenticated }}>
            {children}
        </AuthContext>
    )
}