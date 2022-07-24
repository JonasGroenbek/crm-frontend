import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Deal } from '../../../models/entities'
import { ActiveModal, openModal } from '../../../slices/modals-slice'
import { DealsTable } from '../../general/tables/DealsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const DealsRoute = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (deal: Deal) => deal.id,
        },
    ]
    return (
        <Container>
            <Button onClick={() => dispatch(openModal({ modal: ActiveModal.CreateDealModal }))}>
                Create Deal
            </Button>
            <DealsTable columns={columns} />
        </Container>
    )
}
