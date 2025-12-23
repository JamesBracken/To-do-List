export const isTokenExpired = (tokenExpiry : number) => {
    const bufferTime = 240 // using as a extra measure if a token is close to expiry
    const date = new Date;
    const currentTime = parseInt(date.getTime().toString().slice(0, -3));
    console.log("currentTime:", currentTime)
    console.log("tokenExpiry:", tokenExpiry)
    const isExpired: boolean = currentTime > tokenExpiry || currentTime - bufferTime > tokenExpiry
    console.log("isExpired:", isExpired)
    return isExpired;
}