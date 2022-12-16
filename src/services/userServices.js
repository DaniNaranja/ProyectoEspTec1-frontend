import axios from "axios";

const baseURL= "localhost:3000"

export function listUsers(){
    return axios.get(`${baseURL}/`)
}

export function getUser(userId){
    return axios.get(userId).then();
}

