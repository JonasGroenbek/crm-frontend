import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Product } from '../../../models/entities'
import { ActiveModal, openModal } from '../../../slices/modals-slice'
import { ProductsTable } from '../../general/tables/ProductsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const ProductsRoute = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (product: Product) => product.id,
        },
    ]
    return (
        <Container>
            <Button onClick={() => dispatch(openModal({ modal: ActiveModal.CreateProductModal }))}>
                Create Product
            </Button>
            <ProductsTable columns={columns} />
        </Container>
    )
}
