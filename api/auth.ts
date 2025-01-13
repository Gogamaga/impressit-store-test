import axios from "axios";

interface ApiResponse<T> {
    data: T
}

export function login(username: string, password: string): Promise<ApiResponse<{ accessToken: string, refreshToken: string }>> {
    console.log('LOGIN')
    return axios.post('https://dummyjson.com/auth/login', {
        username,
        password
    })
}

export interface User {
    id: number | null
    email: string
    username: string
    image: string
}

export function getUser(token: string): Promise<ApiResponse<User>> {
    return axios.get('https://dummyjson.com/auth/me', {
        headers :{
            Authorization: `Bearer ${token}`
        }
    })
}