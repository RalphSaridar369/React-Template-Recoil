import { decrypt } from "./cryptoJs"

export const checkLogged = (localtoken,userStateToken) => {
    if (localtoken === null || localtoken === ""){
        console.log("if")
        return false
    }
    else if (decrypt(localtoken) !== decrypt(userStateToken,process.env.REACT_APP_SECRET_CRYPTO_JS2)){
        console.log("else if")
        return false
    }
    else return true
}