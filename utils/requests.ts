import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, updateEmail } from "firebase/auth";
import { auth } from "../src/firebase";
import { IUser } from "./interfaces";

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

export const logOut = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        throw error
    }
}


// profile update

export const updateName = async (displayName: string) => {
    try {
        if (auth.currentUser) {
            await updateProfile(auth?.currentUser, {
                displayName
            })
        }
    } catch (error) {
        throw error
    }
}

export const updateEmailAddress = async (email: string) => {
    try {
        if (auth.currentUser) {
            await updateEmail(auth?.currentUser, email)
        }
    } catch (error) {
        throw error
    }
}
