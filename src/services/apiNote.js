import axios from 'axios'

const BASE_URL = "http://localhost:4000"
const BASE_URL_EXTERNAL = "https://viacep.com.br/ws/"

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function main(body) {
    const promise = axios.post(`${BASE_URL}/home`, body)
    return promise
}

function getCep(cep) {
    const promise = axios.get(`${BASE_URL_EXTERNAL}${cep}/json/`);
    return promise
}


function createNote(body, token) {
    const promise = axios.post(`${BASE_URL}/create/note`, body, createConfig(token))
    return promise
}

const apiNote = { main, createNote, getCep }
export default apiNote