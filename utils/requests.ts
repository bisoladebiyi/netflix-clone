import axios from "axios"


export const fetchData = async(url:string, key:string | undefined, method:string) => {
    const options = {
        url:`${url}?api_key=${key}&language=en-US`,
        method
    }
    try{
        const {data} = await axios(options)
        return data
    }catch(err){
        throw err
    }
}