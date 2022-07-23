import { Settings } from '../../models/entities'
import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface getManySettingsQueryParams {
    limit: number
    offset: number
}

export const getSettingsRequest = (
    query: getManySettingsQueryParams
): Promise<Response<{ settings: Settings[]; count: number }>> =>
    backendConnection.request({
        url: '/settings',
        method: 'GET',
        params: query,
    })
