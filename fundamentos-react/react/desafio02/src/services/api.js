// api.js dentro da pasta src/services
import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.github.com"
})