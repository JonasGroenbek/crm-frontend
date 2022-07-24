import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_TOKEN_KEY } from '../http/back-end/backend-connection'
import { Identity } from '../models/entities'
import { RootState } from '../store'

export enum StoreStage {
    Initial,
    Loading,
    ServerError,
}

export interface State {
    identity?: Identity
    jwt?: string
}

const initialState: State = {
    identity: undefined,
    jwt: undefined,
}

export const usersSlice = createSlice({
    name: 'identity',
    initialState,
    reducers: {
        setIdentity: (state, action: PayloadAction<Identity>) => {
            state.identity = action.payload
        },
        setJwt: (state, action: PayloadAction<string>) => {
            localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, action.payload)
            state.jwt = action.payload
        },
        logOut: (state) => {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
            state.jwt = undefined
            state.identity = undefined
        },
    },
})

export const selectIsAuthenticated = (state: RootState) => {
    return (
        !!state.identity.identity &&
        !!state.identity.jwt &&
        !!localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
    )
}

export const { setIdentity, setJwt, logOut } = usersSlice.actions

export default usersSlice.reducer
