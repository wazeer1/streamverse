import axios from "axios";

export const userConfig = axios.create({
    baseURL: "http://localhost:8001/api/v1/",
});