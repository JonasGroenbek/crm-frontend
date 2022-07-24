import { Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ActiveModal, closeModal } from '../../../../slices/modals-slice'
import { RootState } from '../../../../store'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
`

export const CreateContactModal = () => {
    const { display } = useSelector((state: RootState) => state.modals)
    const dispatch = useDispatch()

    const onCancel = () => {
        dispatch(closeModal())
    }

    return (
        <Modal
            title={'Create Contact'}
            visible={display === ActiveModal.CreateContactModal}
            footer={[]}
            onCancel={onCancel}
        >
            <Container>{'Contact'}</Container>
        </Modal>
    )
}
