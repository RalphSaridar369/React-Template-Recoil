import { decrypt } from "./cryptoJs"
const localtoken = sessionStorage.getItem(process.env.REACT_APP_SECRET_TOKEN_KEY)

export const checkLogged = (userStateToken) => {
    if (localtoken === null || localtoken === "")
        return false
    else if (decrypt(localtoken) !== decrypt(userStateToken,process.env.REACT_APP_SECRET_CRYPTO_JS2))
        return false
    else return true
}