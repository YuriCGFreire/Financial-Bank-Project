import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie} from "nookies";
import Router from "next/router";
import jwt from "jsonwebtoken";
import { AuthContextType, SignInRequestData, SignUpRequestData, UserData } from "../types/types";
import { getUser, signInRequest, signUpRequest } from "../lib/api";

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
        const { token } = await signInRequest({ user_name, password })
        setCookie(undefined, 'techchallenge.token', token, {
            maxAge: 60 * 60 * 24, //24h
        })
        const payload = jwt.decode(token)
        getUser(payload?.name, token).then(data => setUser(data))
        Router.push('/home')
    }

    async function signUp({ user_name, password }: SignUpRequestData) {
        await signUpRequest({ user_name, password })
        Router.push('/')
    }

    async function signOut() {
        destroyCookie({}, 'techchallenge.token', {path: '/'})
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}