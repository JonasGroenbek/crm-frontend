import { Mail } from '../../models/entities'
import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface getManyMailsQueryParams {
    limit: number
    offset: number
}

export const getMailsRequest = (
    query: getManyMailsQueryParams
): Promise<Response<{ mails: Mail[]; count: number }>> =>
    backendConnection.request({
        url: '/mails',
        method: 'GET',
        params: query,
    })
