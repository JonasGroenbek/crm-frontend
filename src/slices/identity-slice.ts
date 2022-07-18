import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_TOKEN_KEY } from '../http/back-end/backend-connection'
import { User } from '../http/back-end/identity'
import { RootState } from '../store'

export enum StoreStage {
    Initial,
    Loading,
    ServerError,
}

export interface State {
    user?: User
    authenticateModalVisible: boolean
    jwt?: string
}

const initialState: State = {
    user: undefined,
    jwt: undefined,
    authenticateModalVisible: false,
}

export const usersSlice = createSlice({
    name: 'identity',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        setJwt: (state, action: PayloadAction<string | undefined>) => {
            localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, action.payload ?? '')
            state.jwt = action.payload
        },
        setAuthenticationModalVisible: (state, action: PayloadAction<boolean>) => {
            state.authenticateModalVisible = action.payload
        },
    },
})

export const { setUser, setAuthenticationModalVisible, setJwt } = usersSlice.actions

export default usersSlice.reducer
