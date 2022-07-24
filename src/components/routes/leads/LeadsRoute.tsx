import { useEffect } from 'react'
import styled from 'styled-components'
import { getLeadsRequest } from '../../../http/back-end/leads'
import { Lead } from '../../../models/entities'
import { LeadsTable } from '../../general/tables/LeadsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const LeadsRoute = () => {
    useEffect(() => {
        getLeadsRequest({ limit: 1, offset: 1 })
    }, [])
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (lead: Lead) => lead.id,
        },
    ]
    return (
        <Container>
            <LeadsTable columns={columns} />
        </Container>
    )
}
