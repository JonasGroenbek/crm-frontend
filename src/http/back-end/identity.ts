import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface User {
    id: number
    email: string
    password: string
}

export interface LoginResponse {
    user: User
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
        url: '/identity/authenticate',
        method: 'POST',
        data: { email, password },
    })
