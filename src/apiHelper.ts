import { API_BASE_URL } from "./constants";
import { handleLogin } from "./authHandlers";
import { isTokenExpired } from "./authHelper";

type apiGetParams = {
    endpoint: string,
    accessToken: string,
    tokenExpiry: number,
    logout: () => void
}

type apiPostParams = {
    endpoint: string,
    accessToken: string,
    tokenExpiry: number,
    logout: () => void
    body: object
}

const api = {
    get: function ({ endpoint, accessToken, tokenExpiry, logout }: apiGetParams) {
        const isAuthTokenExpired = isTokenExpired(tokenExpiry)
        if (isAuthTokenExpired) logout();
        if (!accessToken) {
            console.error("Access token missing from GET request")
            logout()
        }
        try {
            fetch(`${API_BASE_URL}${endpoint}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    } else if (res.status === 401 || res.status === 403) {
                        console.error("Forbidden or unauthorized request, redirecting to login")
                        logout();
                    }
                }).then(data => {
                    return data;
                })
        } catch (e) {
            console.error(`Failure fetching from ${endpoint}. Error: ${e} `)
        }
    }
    ,
    post: function ({ endpoint, accessToken, tokenExpiry, logout, body }: apiPostParams) {
        const isAuthTokenExpired = isTokenExpired(tokenExpiry)
        if (isAuthTokenExpired) logout();
        if (!accessToken) {
            console.error("Access token missing from POST request")
            logout()
        }

        try {
            fetch(`${API_BASE_URL}${endpoint}`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `${accessToken}`
                    },
                    body: JSON.stringify(body)
                }
            ).then(res => {
                if (res.ok) {
                    console.log(res.json())
                    return res.json()
                } else if (res.status === 401 || res.status === 403) {
                    console.error("Forbidden or unauthorized request, redirecting to login")
                    logout();
                }
            }).then(data => {
                return data;
            })
        } catch (e) {
            console.error(`Failure posting to ${endpoint}. Error: ${e} `)
        }
    }
}

export default api;