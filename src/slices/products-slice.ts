import { createSlice } from '@reduxjs/toolkit'

export enum StoreStage {
    Initial,
    Loading,
    ServerError,
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

const initialState: State = {}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return {}
    },
})

export const {} = productsSlice.actions

export default productsSlice.reducer
