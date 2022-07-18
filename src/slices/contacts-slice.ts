import { createSlice } from '@reduxjs/toolkit'

export enum StoreStage {
    Initial,
    Loading,
    ServerError,
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

const initialState: State = {}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return {}
    },
})

export const {} = contactsSlice.actions

export default contactsSlice.reducer
