export interface PopUpProps {
    url?:string
    titleText?:string
    desc?:string 
    year?: string | number 
    score?: string | number
    movUrl?:string
    id?: number
    set:React.Dispatch<React.SetStateAction<boolean>>

}

export interface IMyList {
    list: Omit<PopUpProps, "set">[]
}
