import config from "./config.json";

import { Amplify } from "aws-amplify";
import { signIn, fetchAuthSession } from "@aws-amplify/auth"

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: config.amplify.userPoolId,
            userPoolClientId: config.amplify.userPoolClientId
        }
    }
})

export const logIn = async (userName: string, password: string) => {
    const signInResult = await signIn({
        username: userName,
        password: password
    }
    )
    return signInResult;
}

export async function loginTest() {
    const result = await logIn(
        config.credentials.username,
        config.credentials.password
    )
    const session = await fetchAuthSession()
    console.log("Login result:", result)
    console.log("Auth session:", session)
    console.log("Id token", session.tokens?.idToken?.toString())
}