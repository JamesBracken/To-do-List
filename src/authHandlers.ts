import { generatePKCECredentials } from "./PKCEHelper"
import { COGNITO_BASE_URL } from "./constants"
import config from "./config.json";
export const handleLogin = async () => {
    async function getPKCE() {
        const PKCECredentials = await generatePKCECredentials()
        window.location.href = `${COGNITO_BASE_URL}login/continue?client_id=o817ick1fj45frs5gg42nv0sq&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth-callback&response_type=code&scope=email+openid+profile&code_challenge=${PKCECredentials}&code_challenge_method=S256`
    }
    getPKCE()
}

export const handleLogout = () => {
    window.location.href = `${COGNITO_BASE_URL}logout?client_id=${config.amplify.userPoolClientId}&logout_uri=http%3A%2F%2Flocalhost%3A5173%2F`
}