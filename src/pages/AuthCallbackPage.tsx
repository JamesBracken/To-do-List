import { useContext, useEffect, useState } from "react";
import config from "../config.json";
import { AuthContext } from "../components/authContext.tsx/AuthContext";
const AuthCallbackPage = () => {
    const authReturnedCode = window.location.search.split("&")[0]
        .replace("?code=", "")
    const context = useContext(AuthContext);

    if (!context) throw new Error("AuthCallBackPage must be used within AuthProvider, context does not currently exist")
    const { tokens, setTokens } = context;
    useEffect(() => {
        (async () => {
            try {
                const codeVerifier = sessionStorage.getItem("codeVerifier");
                if (!codeVerifier) {
                    console.error("codeVerifier not found")
                }

                if (!authReturnedCode) {
                    console.error("authReturnedCode not found")
                }

                const params = new URLSearchParams({
                    grant_type: "authorization_code",
                    client_id: config.amplify.userPoolClientId,
                    code: authReturnedCode,
                    redirect_uri: "http://localhost:5173/auth-callback",
                    code_verifier: codeVerifier,
                });

                const response = await fetch("https://eu-north-1dsoci5dtk.auth.eu-north-1.amazoncognito.com/oauth2/token", {
                    method: "POST",
                    body: params.toString(),
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                        "Accept": "application/json"
                    }
                })

                if (!response.ok) {
                    console.error(`token request failure status code:${response.status}`)
                }

                const json = await response.json()

                setTokens(json);

                sessionStorage.removeItem("codeVerifier")
                console.log("AuthProvider:", tokens)
                // console.log("tokens:", json)
            } catch (e) {
                console.error("Unexpected error fetching tokens", e)
            }
        })()
    }, [])

    return (
        <>
            <h1>Auth callback</h1>
        </>
    )
}
export default AuthCallbackPage;