import { createSlice } from "@reduxjs/toolkit"
import { IMyList, PopUpProps } from "../../../utils/interfaces"

const initialState: IMyList = {
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
            state.list = state.list.filter((item: Omit<PopUpProps, "set">) => item.id !== payload.payload.id)
        }
    }
})

export const { addToList, removeFromList } = myListSlice.actions
export default myListSlice.reducer