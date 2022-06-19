import { createSlice } from "@reduxjs/toolkit"


const initialState: any = {
    list: []
}

const myListSlice = createSlice({
    name: "myListPage",
    initialState,
    reducers: {
        addToList: (state, payload) => {
            state.list = [...state.list, payload.payload]
        },
        removeFromList: (state, payload) => {
            state.list = state.list.filter((item: any) => item.id !== payload.payload.id)
        }
    }
})

export const { addToList, removeFromList } = myListSlice.actions
export default myListSlice.reducer