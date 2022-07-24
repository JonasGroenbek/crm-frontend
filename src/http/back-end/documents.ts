import { Document } from '../../models/entities'
import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface getManyDocumentsQueryParams {
    limit: number
    offset: number
}

export const getDocumentsRequest = (
    query: getManyDocumentsQueryParams
): Promise<Response<{ documents: Document[]; count: number }>> =>
    backendConnection.request({
        url: '/documents',
        method: 'GET',
        params: query,
    })
