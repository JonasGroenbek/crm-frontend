import { createSlice } from '@reduxjs/toolkit'

export enum StoreStage {
    Initial,
    Loading,
    ServerError,
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {}

const initialState: State = {}

export const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        return {}
    },
})

export const {} = activitiesSlice.actions

export default activitiesSlice.reducer
