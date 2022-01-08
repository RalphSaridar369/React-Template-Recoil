var CryptoJS = require("crypto-js");

export const encrypt = (data,secret) =>{
    return CryptoJS.AES.encrypt(data, secret?secret:process.env.REACT_APP_SECRET_CRYPTO_JS).toString();
}

export const decrypt = (data,secret) =>{
    let bytes =  CryptoJS.AES.decrypt(data, secret?secret:process.env.REACT_APP_SECRET_CRYPTO_JS);
    let original = bytes.toString(CryptoJS.enc.Utf8);
    return original
}