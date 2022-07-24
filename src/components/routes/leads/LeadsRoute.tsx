import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Lead } from '../../../models/entities'
import { ActiveModal, openModal } from '../../../slices/modals-slice'
import { LeadsTable } from '../../general/tables/LeadsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const LeadsRoute = () => {
    const dispatch = useDispatch()

    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (lead: Lead) => lead.id,
        },
    ]
    return (
        <Container>
            <Button onClick={() => dispatch(openModal({ modal: ActiveModal.CreateLeadModal }))}>
                Create Lead
            </Button>
            <LeadsTable columns={columns} />
        </Container>
    )
}
