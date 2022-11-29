import Axios from "axios";
import { SignInRequestData, SignUpRequestData, TransactionType } from "../types/types";


    const API = 'http://localhost:3003'
const endpoint = (path: string): string => API + path;

const postSignin = async (path:string, signInRequestData: SignInRequestData):Promise<any> => {
    return fetch(endpoint(path), {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(signInRequestData)
    }).then(res => {
        return res.json()
    }).then(data => {
        if(data.statusCode >= 400){
            throw data.message
        }
        return data
    })
}

const postSignOut = async (path:string):Promise<any> => {
    return fetch(endpoint(path), {
        method: "POST",
        headers: {'Content-type': 'application/json'}
    }).then(res => res.json())
}

const postTransaction = async (path:string, transactionData: TransactionType):Promise<any> => {
    return fetch(endpoint(path), {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(transactionData)
    })
    .then(res => res.json())
    .then(res => {
        if(res.statusCode >= 400){
            throw res.message
        }
        // return res
    })
    .catch(err => {
        return {
            statusCode: 400,
            err
        }
    })
}

const postSignUp = async (path:string, signInRequestData: SignInRequestData):Promise<any> => {
    return fetch(endpoint(path), {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(signInRequestData)
    })
    .then(res => res.json())
    .then(res => {
        if(res.statusCode >= 400){
            throw res.message
        }
        return res
    })
    .catch(err => {
        throw Error(err)
    })
}

const getUserByName = async (path: string, token?: string): Promise<any> => {
    return fetch(endpoint(path), {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
        }
    }).then(res => res.json())
}

export const signInRequest = async (signInRequestData: SignInRequestData) => {
    return postSignin(`/auth/signin`, signInRequestData)
}

export const signUpRequest = async (signUpRequestData: SignUpRequestData) => {
    return postSignUp(`/auth/signup`, signUpRequestData)
}

export const getUser = async (name?: string, token?: string) => {
    return getUserByName(`/users/${name}`, token)
}

export const clearCookie = async () => {
    return postSignOut(`/users/signout`)
}

export const transaction = async (transactionData: TransactionType) => {
    return postTransaction('/transactions', transactionData)
}