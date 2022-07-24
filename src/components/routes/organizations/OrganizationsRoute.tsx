import styled from 'styled-components'
import { Organization } from '../../../models/entities'
import { OrganizationsTable } from '../../general/tables/OrganizationsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const OrganizationsRoute = () => {
    const columns = [
        {
            title: 'Phone',
            key: 'phone',
            render: (identity: Organization) => identity.email,
        },
    ]
    return (
        <Container>
            <OrganizationsTable columns={columns} />
        </Container>
    )
}
