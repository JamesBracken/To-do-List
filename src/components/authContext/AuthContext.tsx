import { jwtDecode, type JwtPayload } from "jwt-decode";
import { useState } from "react";
import { createContext } from "react";
import { isTokenExpired } from "../../authHelper";

type AuthContextType = {
    tokens: Tokens | null,
    setTokens: React.Dispatch<React.SetStateAction<Tokens | null>>,
    user: CognitoIdTokenPayload | User | null,
    setUser: React.Dispatch<React.SetStateAction<CognitoIdTokenPayload>>,
    isAuthenticated: boolean,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export type Tokens = {
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

export type CognitoIdTokenPayload = JwtPayload | User | null;

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }) => {
    const [tokens, setTokens] = useState<Tokens | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState<CognitoIdTokenPayload>(null);
    if (tokens !== null && user === null) setUser(tokens?.id_token && !tokens.error ? jwtDecode(tokens.id_token) : null)

    if (tokens !== null && user?.exp === null) throw new Error("Tokens present but user authentication expiry not found")
    if (user && user.exp && !isAuthenticated) {
        setIsAuthenticated(!isTokenExpired(user.exp))
    }

    return (
        <AuthContext value={{ tokens, setTokens, user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext>
    )
}