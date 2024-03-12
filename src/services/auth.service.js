import axios from "axios";
import { jwtDecode }  from "jwt-decode";

const login =(data,callback)=>{
    console.log('data ',data)
    axios.post('https://fakestoreapi.com/auth/login',data)
    .then((res)=>{
        callback(true, res.data.token)
        console.log('res ', res)
    }).catch((err)=>{
        callback(false, err)
        console.error('err ', err)
    })
}

const getUsername =(token)=>{
    const decoded = jwtDecode(token)
    console.log('decoded ',decoded)
    return decoded.user
}

export { login, getUsername}