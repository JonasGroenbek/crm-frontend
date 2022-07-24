import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Identity } from '../../../../models/entities'
import { ActiveModal, openModal } from '../../../../slices/modals-slice'
import { IdentityTable } from '../../../general/tables/IdentityTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const UsersTab = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Email',
            key: 'email',
            render: (identity: Identity) => identity.email,
        },
    ]
    return (
        <Container>
            <Button onClick={() => dispatch(openModal({ modal: ActiveModal.CreateIdentityModal }))}>
                Create User
            </Button>
            <IdentityTable columns={columns} />
        </Container>
    )
}
