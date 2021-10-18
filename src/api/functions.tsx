import React from 'react'
import Api from './API';
import { getUserResponse } from '../interfaces/authInterfaces';

export const GetUsers = async () => {
    try {
        const response = await Api.get<getUserResponse>('/user/me', { headers: { 'Content-Type': 'application/json', } })
        return {
            id: response.data.id,
            name: response.data.name,
            points: response.data.points,
            createData: response.data.createDate,
            redeemHistory: response.data.redeemHistory,
            __V: response.data.__V,
        }
    } catch (error: any) {
        console.log(`No se ha podido hacer conexión con la API ${error.message} ${error.response.status}`)
    }
}

export const GetProducts = async () => {
    try {
        const response = await Api.get<any>('/products', { headers: { 'Content-Type': 'application/json', } })
        return {
            producto: response.data,
        }
    } catch (error: any) {
        console.log(`No se ha podido hacer conexión con la API ${error.message} ${error.response.status}`)
    }
}

