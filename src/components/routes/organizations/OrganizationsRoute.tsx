import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Organization } from '../../../models/entities'
import { ActiveModal, openModal } from '../../../slices/modals-slice'
import { OrganizationsTable } from '../../general/tables/OrganizationsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const OrganizationsRoute = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Phone',
            key: 'phone',
            render: (identity: Organization) => identity.email,
        },
    ]
    return (
        <Container>
            <Button
                onClick={() => dispatch(openModal({ modal: ActiveModal.CreateOrganizationModal }))}
            >
                Create Organization
            </Button>
            <OrganizationsTable columns={columns} />
        </Container>
    )
}
