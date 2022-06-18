export interface PopUpProps {
    url?:string
    titleText?:string
    desc?:string 
    year?: string | number 
    score?: string | number
    movUrl?:string
    set:React.Dispatch<React.SetStateAction<boolean>>

}

export interface StateTypes{
    headerShows: any,
    sectionOne: [any],
    sectionTwo: [any],
    sectionThree: [any]
}