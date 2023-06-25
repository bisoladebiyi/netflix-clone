import axios from "axios"
import { createUserWithEmailAndPassword, UserCredential, User, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebase";
import { IUser } from "./interfaces";


export const fetchData = async (url: string, key: string | undefined, method: string) => {
    const options = {
        url: `${url}?api_key=${key}&language=en-US`,
        method
    }
    try {
        const { data } = await axios(options)
        return data
    } catch (err) {
        throw err
    }
}


// auth
export const createUser = async (email: string, password: string) => {
    try {
        const { user }: IUser = await createUserWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        throw error
    }
}

export const logIn = async (email: string, password: string) => {
    try {
        const { user }: IUser = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        throw error
    }
}


