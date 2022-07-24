import { Contact } from '../../models/entities'
import { Response } from '../response.interceptor'
import { backendConnection } from './backend-connection'

export interface getManyContactsQueryParams {
    limit: number
    offset: number
}

export const getContactsRequest = (
    query: getManyContactsQueryParams
): Promise<Response<{ contacts: Contact[]; count: number }>> =>
    backendConnection.request({
        url: '/contacts',
        method: 'GET',
        params: query,
    })

export const getContactByIdRequest = (id: number): Promise<Response<Contact>> =>
    backendConnection.request({
        url: `/contacts/${id}`,
        method: 'GET',
    })
