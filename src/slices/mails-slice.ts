import { createSlice } from '@reduxjs/toolkit'

export enum StoreStage {
    Initial,
    Loading,
    ServerError,
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

const initialState: State = {}

export const mailsSlice = createSlice({
    name: 'mails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return {}
    },
})

export const {} = mailsSlice.actions

export default mailsSlice.reducer
