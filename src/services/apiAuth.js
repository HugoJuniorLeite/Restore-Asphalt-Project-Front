import axios from "axios"

const BASE_URL = "http://localhost:4000"

 

function signIn(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-in`, body)
    return promise
}

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/users`, body)
    return promise
}

const apiAuth = { signIn, signUp } 
export default apiAuth

