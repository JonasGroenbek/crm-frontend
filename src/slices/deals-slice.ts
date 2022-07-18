import { createSlice } from '@reduxjs/toolkit'

export enum StoreStage {
    Initial,
    Loading,
    ServerError,
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

const initialState: State = {}

export const dealsSlice = createSlice({
    name: 'deals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return {}
    },
})

export const {} = dealsSlice.actions

export default dealsSlice.reducer
