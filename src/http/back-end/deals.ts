import { Deal } from '../../models/entities'
import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface getManyDealsQueryParams {
    limit: number
    offset: number
}

export const getDealsRequest = (
    query: getManyDealsQueryParams
): Promise<Response<{ deals: Deal[]; count: number }>> =>
    backendConnection.request({
        url: '/deals',
        method: 'GET',
        params: query,
    })
