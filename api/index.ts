import axios from "axios";
import {removeUserSession} from "@/storage";

export interface ApiResponse<T> {
    data: T
}

export function axiosInit(){
    axios.interceptors.response.use(function (response) {
        return response;
    }, async function (error) {
        if (error.response.status === 401) {
            // unauthorized user
            await removeUserSession()
        }
        return Promise.reject(error);
    });
}