import { API_BASE_URL } from "./constants";
import { handleLogin } from "./authHandlers";

type apiGetParams = {
    endpoint: string,
    accessToken: string
}

type apiPostParams = {
    endpoint: string,
    accessToken: string,
    body: object
}

const api = {
    get: function ({ endpoint, accessToken }: apiGetParams) {
        if (!accessToken) {
            console.error("Access token missing from GET request")
            handleLogin()
        }
        if()
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
                    }
                    else if (res.status === 401) {
                        console.error("Forbidden or unauthorized request, redirecting to login")
                        handleLogin();
                    }
                }).then(data => {
                    return data;
                })
        } catch (e) {
            console.error(`Failure fetching from ${endpoint}. Error: ${e} `)
        }
    }
    ,
    post: function ({ endpoint, accessToken, body }: apiPostParams) {
        if (!accessToken) {
            console.error("Access token missing from POST request")
            handleLogin()
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
                }
                else if (res.status === 401) {
                    console.error("Forbidden or unauthorized request, redirecting to login")
                    handleLogin();
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