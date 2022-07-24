import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum StoreStage {
    Initial,
    Loading,
    ServerError,
}
export enum ActiveTab {
    Users = 'Users',
    Subscription = 'Subscription',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {
    activeTab: ActiveTab
}

const initialState: State = {
    activeTab: ActiveTab.Users,
}

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setActiveTab: (state, action: PayloadAction<ActiveTab>) => {
            state.activeTab = action.payload
        },
    },
    extraReducers: (builder) => {
        return {}
    },
})

export const { setActiveTab } = companySlice.actions

export default companySlice.reducer
