import styled from 'styled-components'
import { Product } from '../../../models/entities'
import { ProductsTable } from '../../general/tables/ProductsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const ProductsRoute = () => {
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (product: Product) => product.id,
        },
    ]
    return (
        <Container>
            <ProductsTable columns={columns} />
        </Container>
    )
}
