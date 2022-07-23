import { Lead } from '../../models/entities'
import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface getManyLeadsQueryParams {
    limit: number
    offset: number
}

export const getLeadsRequest = (
    query: getManyLeadsQueryParams
): Promise<Response<{ leads: Lead[]; count: number }>> =>
    backendConnection.request({
        url: '/leads',
        method: 'GET',
        params: query,
    })
