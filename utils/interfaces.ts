import { User } from "firebase/auth"

export interface PopUpProps {
    url?: string
    titleText?: string
    desc?: string
    year?: string | number
    score?: string | number
    movUrl?: string
    id?: number
    set: React.Dispatch<React.SetStateAction<boolean>>

}

export interface StateTypes {
    headerShows: any,
    sectionOne: any[],
    sectionTwo: any[],
    sectionThree: any[]
}

export interface IUser {
    user: User
}

export interface IForm {
    authType: "login" | "signup";
    error: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    loading: boolean;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    setFirstName?: React.Dispatch<React.SetStateAction<string>>;
    setLastName?: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    clearErrorMsg: () => void;
}