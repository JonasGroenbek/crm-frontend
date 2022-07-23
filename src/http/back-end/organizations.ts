import { Organization } from '../../models/entities'
import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface getManyOrganizationsQueryParams {
    limit: number
    offset: number
}

export const getOrganizationsRequest = (
    query: getManyOrganizationsQueryParams
): Promise<Response<{ organizations: Organization[]; count: number }>> =>
    backendConnection.request({
        url: '/organizations',
        method: 'GET',
        params: query,
    })
