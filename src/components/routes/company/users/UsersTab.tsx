import styled from 'styled-components'
import { Identity } from '../../../../models/entities'
import { IdentityTable } from '../../../general/tables/IdentityTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const UsersTab = () => {
    const columns = [
        {
            title: 'Email',
            key: 'email',
            render: (identity: Identity) => identity.email,
        },
    ]
    return (
        <Container>
            <IdentityTable columns={columns} />
        </Container>
    )
}
