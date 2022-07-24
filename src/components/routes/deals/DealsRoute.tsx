import styled from 'styled-components'
import { Deal } from '../../../models/entities'
import { DealsTable } from '../../general/tables/DealsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const DealsRoute = () => {
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (deal: Deal) => deal.id,
        },
    ]
    return (
        <Container>
            <DealsTable columns={columns} />
        </Container>
    )
}
