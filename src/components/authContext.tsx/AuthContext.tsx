import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { createContext } from "react";

type AuthContextType = {
    tokens: Tokens | null,
    setTokens: React.Dispatch<React.SetStateAction<Tokens | null>>;
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
    "cognito:username": string
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }) => {
    const [tokens, setTokens] = useState<Tokens | null>(null)
   const user = tokens?.id_token && !tokens.error? jwtDecode(tokens.id_token):null;

    console.log("user:", user)
    return (
        <AuthContext value={{ tokens, setTokens }}>
            {children}
        </AuthContext>
    )
}