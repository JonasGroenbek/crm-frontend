import { Product } from '../../models/entities'
import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface getManyProductsQueryParams {
    limit: number
    offset: number
}

export const getProductsRequest = (
    query: getManyProductsQueryParams
): Promise<Response<{ products: Product[]; count: number }>> =>
    backendConnection.request({
        url: '/products',
        method: 'GET',
        params: query,
    })
