import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setCookie, parseCookies, destroyCookie} from "nookies";
import Router from "next/router";
import jwt from "jsonwebtoken";
import { AuthContextType, SignInRequestData, SignUpRequestData, TransactionType, UserData } from "../types/types";
import { getUser, signInRequest, signUpRequest, transaction } from "../lib/api";

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<UserData | null>(null);
    useEffect(() => {
        const { 'techchallenge.token': token } = parseCookies()
        if (token) {
            const payload = jwt.decode(token)
            getUser(payload?.name, token).then(data => setUser(data))
        }
    }, [])

    async function signIn({ user_name, password }: SignInRequestData) {
        try{
            const {token} = await signInRequest({ user_name, password })
            if(token != undefined){
                setCookie(undefined, 'techchallenge.token', token, {
                    maxAge: 60 * 60 * 24, //24h
                })
            }
            const payload = jwt.decode(token)
            if(token){
                getUser(payload?.name, token).then(data => setUser(data))
                Router.push('/home')
            }
        }catch(error){
            toast.dark(`${error}`, {
                autoClose: 5000
            })
        }
    }

    async function createTransaction(data: TransactionType){
        try{
            await transaction(data)
            .then(res => {
                if(res.statusCode >= 400){
                    toast.dark(`${res.err}`, {autoClose: 5000})
                }else{
                    toast.dark('Value transferred successfully', { autoClose: 2000})
                }
            })
        }catch(errors:any){
            if(errors){
                errors.forEach((error:any) => {
                    toast.dark(`${error}`, {autoClose: 5000})
                })
            }
        }
        
    }

    async function signUp({ user_name, password }: SignUpRequestData) {
        try{
            await signUpRequest({ user_name, password }).catch(err => {
                toast.dark(`${err}`, {autoClose: 5000})
            })
            Router.push('/')
        }catch(errors:any){
            if(errors){
                errors.forEach((error:any) => {
                    toast.dark(`${error}`, {autoClose: 5000})
                })
            }
        }
    }

    async function signOut() {
        destroyCookie({}, 'techchallenge.token', {path: '/'})
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut, createTransaction }}>
            {children}
        </AuthContext.Provider>
    )
}