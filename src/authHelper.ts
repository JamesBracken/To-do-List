export const isTokenExpired = (tokenExpiry) => {
    const bufferTime = 240
    const date = new Date;
    const currentTime = parseInt(date.getTime().toString().slice(0, -3));
    console.log("currentTime:", currentTime)
    console.log("tokenExpiry:", tokenExpiry)
    const isExpired = currentTime > tokenExpiry || currentTime - bufferTime
    console.log("isExpired:", isExpired)
}

