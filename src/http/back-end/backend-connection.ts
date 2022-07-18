import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import withResponseInterceptor from '../response.interceptor'

export const LOCAL_STORAGE_TOKEN_KEY = 'authentication_token'

const backendConnection = axios.create({
    baseURL: 'http://localhost:3010',
})

/*
	Since your token is dynamic, you can't define it in your axios instance factory headers setup. 
	Best way to handle this globally is to use request interceptors
	https://stackoverflow.com/questions/57624855/how-to-use-dynamic-auth-header-in-axiosvue-js
*/
backendConnection.interceptors.request.use((requestConfig: AxiosRequestConfig<AxiosInstance>) => {
    requestConfig.headers = {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
        'Cache-Control': 'no-cache',
    }
    return requestConfig
})

withResponseInterceptor(backendConnection)

export { backendConnection }
