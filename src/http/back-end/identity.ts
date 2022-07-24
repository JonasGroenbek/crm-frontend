import { Identity } from '../../models/entities'
import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface LoginResponse {
    identity: Identity
    jwt: string
}

export interface SignUpRequestDTO {
    email: string
    password: string
}

export const signUpRequest = ({
    email,
    password,
}: SignUpRequestDTO): Promise<Response<LoginResponse>> =>
    backendConnection.request({
        url: '/identity/sign-up',
        method: 'POST',
        data: { email, password },
    })

export interface LoginRequestDTO {
    email: string
    password: string
}

export const loginRequest = ({
    email,
    password,
}: LoginRequestDTO): Promise<Response<LoginResponse>> =>
    backendConnection.request({
        url: '/identity/login',
        method: 'POST',
        data: { email, password },
    })

export const authenticateRequest = (): Promise<Response<LoginResponse>> =>
    backendConnection.request({
        url: '/identity/authenticate',
        method: 'GET',
    })

export interface getManyIdentitiesQueryParams {
    limit: number
    offset: number
}

export const getIdentitiesRequest = (
    query: getManyIdentitiesQueryParams
): Promise<Response<{ identities: Identity[]; count: number }>> =>
    backendConnection.request({
        url: '/identity',
        method: 'GET',
        params: query,
    })
