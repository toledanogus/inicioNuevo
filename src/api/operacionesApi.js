import axios from "axios";

export const operacionesApi = axios.create({
    baseURL: './php'
})