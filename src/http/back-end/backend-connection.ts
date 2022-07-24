import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Response } from '../response.interceptor'

export interface TypedAxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<Response<T>>
}

export const LOCAL_STORAGE_TOKEN_KEY = 'authentication_token'

const connection = axios.create({
    baseURL: 'http://localhost:3010',
})

/*
	Since your token is dynamic, you can't define it in your axios instance factory headers setup. 
	Best way to handle this globally is to use request interceptors
	https://stackoverflow.com/questions/57624855/how-to-use-dynamic-auth-header-in-axiosvue-js
*/

const withHeaderInterceptor = (requestConfig: AxiosRequestConfig<AxiosInstance>) => {
    requestConfig.headers = {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
        'Cache-Control': 'no-cache',
    }
    return requestConfig
}

connection.interceptors.request.use(withHeaderInterceptor)

const withResponseFormatterInterceptorSuccess = (resolvedResponse: AxiosResponse<any, any>) => {
    return {
        data: resolvedResponse?.data,
        status: resolvedResponse.status,
        successful: true,
    }
}
const withResponseFormatterInterceptorOnRejected = (error: any) => {
    const { response } = error
    //Console.log is here for debugging purposes for Nginx. Leave it there!
    return {
        status: response?.status || NaN,
        successful: false,
        message: response?.data?.response || 'Something went wrong',
    }
}
connection.interceptors.response.use(
    withResponseFormatterInterceptorSuccess,
    withResponseFormatterInterceptorOnRejected
)

const backendConnection = connection as TypedAxiosInstance

export { backendConnection }
