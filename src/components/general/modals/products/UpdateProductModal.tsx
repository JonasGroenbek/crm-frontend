import { Button, Modal, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProductByIdRequest } from '../../../../http/back-end/products'
import { Product } from '../../../../models/entities'
import { ActiveModal, closeModal } from '../../../../slices/modals-slice'
import { RootState } from '../../../../store'
import { errorNotification, infoNotification } from '../../notification'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
`

enum SubjectState {
    Loading = 'Loading',
    Loaded = 'Loaded',
    Error = 'Error',
}

export const UpdateProductModal = () => {
    const { display, subjectId } = useSelector((state: RootState) => state.modals)
    const dispatch = useDispatch()
    const [product, setProduct] = useState<Product>()
    const [subjectState, setSubjectState] = useState<SubjectState>(SubjectState.Loading)

    const getProduct = async () => {
        if (!subjectId) {
            setSubjectState(SubjectState.Error)
            return
        }
        const response = await getProductByIdRequest(subjectId)
        if (response.successful) {
            setProduct(response.data)
            setSubjectState(SubjectState.Loaded)
        } else {
            errorNotification('Failed', 'Failed to load the requested product')
            setSubjectState(SubjectState.Error)
            onCancel()
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const onCancel = () => {
        dispatch(closeModal())
    }

    const onSubmit = () => {
        infoNotification('Not implemented', 'this function is yet to be implemented')
    }

    return (
        <Modal
            title={'Update Product'}
            visible={display === ActiveModal.UpdateProductModal}
            footer={[]}
            onCancel={onCancel}
        >
            <Container>
                {subjectState === SubjectState.Loading && <Spin />}
                {subjectState === SubjectState.Error && (
                    <div>Something went wrong while loading the requested product</div>
                )}
                {subjectState === SubjectState.Loaded && product && (
                    <div>
                        {product.id}
                        <Button onClick={onSubmit}>Submit</Button>
                    </div>
                )}
            </Container>
        </Modal>
    )
}
