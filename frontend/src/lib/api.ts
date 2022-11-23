import { SignInRequestData, SignUpRequestData } from "../types/types";


const API = 'http://localhost:3003';
const endpoint = (path: string): string => API + path;

const postSignin = async (path:string, signInRequestData: SignInRequestData):Promise<any> => {
    return fetch(endpoint(path), {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(signInRequestData)
    }).then(res => res.json())
}

const postSignOut = async (path:string):Promise<any> => {
    return fetch(endpoint(path), {
        method: "POST",
        headers: {'Content-type': 'application/json'}
    }).then(res => res.json())
}

const postSignUp = async (path:string, signInRequestData: SignInRequestData):Promise<any> => {
    return fetch(endpoint(path), {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(signInRequestData)
    }).then(res => res.json())
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