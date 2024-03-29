/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface BaseResponse {
    status: number
}

export interface SuccessfulResponse<T> extends BaseResponse {
    successful: true
    data: T
}

export interface FailedResponse extends BaseResponse {
    successful: false
    message: string
}

export type Response<T> = SuccessfulResponse<T> | FailedResponse

export interface TypedAxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<Response<T>>
}

export default function withResponseInterceptor(instance: AxiosInstance): TypedAxiosInstance {
    instance.interceptors.response.use(
        (resolvedResponse: AxiosResponse<any, any>) => {
            return {
                data: resolvedResponse?.data,
                status: resolvedResponse.status,
                successful: true,
            }
        },
        (error) => {
            const { response } = error
            //Console.log is here for debugging purposes for Nginx. Leave it there!
            console.log(response)
            return {
                status: response?.status || NaN,
                successful: false,
                message: response?.data?.response || 'Something went wrong',
            }
        }
    )
    return instance
}
