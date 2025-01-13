import axios from 'axios';

import {ApiResponse} from './index'

export interface Item {
    id: number
    title: string
    price: number
    description: string
    images: Array<string>
}

export function getAll(offset: number | undefined = 0, limit: number | undefined = 10): Promise<ApiResponse<Item[]>> {
    return axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`, {})
}