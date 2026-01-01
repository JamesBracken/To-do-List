export const isTokenExpired = (tokenExpiry : number) => {
    const bufferTime = 240 //(Seconds) using as a extra measure if a token is close to expiry
    const date = new Date;
    const currentTime = parseInt(date.getTime().toString().slice(0, -3));
    const isExpired: boolean = currentTime > tokenExpiry || currentTime - bufferTime > tokenExpiry
    return isExpired;
}

export const validateAuthTokenResponse = (data: any) => {
    if(!data?.access_token || !data?.id_token || !data?.expires_in || !data?.refresh_token || !data?.token_type) {
        console.error("Auth Token response is invalid")
        return false;
    }
    return true;
}