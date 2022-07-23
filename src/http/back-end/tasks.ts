import { Task } from '../../models/entities'
import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface getManyTasksQueryParams {
    limit: number
    offset: number
}

export const getTasksRequest = (
    query: getManyTasksQueryParams
): Promise<Response<{ tasks: Task[]; count: number }>> =>
    backendConnection.request({
        url: '/tasks',
        method: 'GET',
        params: query,
    })
