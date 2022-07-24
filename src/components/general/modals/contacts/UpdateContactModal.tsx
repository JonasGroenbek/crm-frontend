import { Button, Modal, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getContactByIdRequest } from '../../../../http/back-end/contacts'
import { Contact } from '../../../../models/entities'
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

export const UpdateContactModal = () => {
    const { display, subjectId } = useSelector((state: RootState) => state.modals)
    const dispatch = useDispatch()
    const [contact, setContact] = useState<Contact>()
    const [subjectState, setSubjectState] = useState<SubjectState>(SubjectState.Loading)

    const getContact = async () => {
        if (!subjectId) {
            setSubjectState(SubjectState.Error)
            return
        }
        const response = await getContactByIdRequest(subjectId)
        if (response.successful) {
            setContact(response.data)
            setSubjectState(SubjectState.Loaded)
        } else {
            errorNotification('Failed', 'Failed to load the requested contact')
            setSubjectState(SubjectState.Error)
            onCancel()
        }
    }

    useEffect(() => {
        getContact()
    }, [])

    const onCancel = () => {
        dispatch(closeModal())
    }

    const onSubmit = () => {
        infoNotification('Not implemented', 'this function is yet to be implemented')
    }

    return (
        <Modal
            title={'Update Contact'}
            visible={display === ActiveModal.UpdateContactModal}
            footer={[]}
            onCancel={onCancel}
        >
            <Container>
                {subjectState === SubjectState.Loading && <Spin />}
                {subjectState === SubjectState.Error && (
                    <div>Something went wrong while loading the requested contact</div>
                )}
                {subjectState === SubjectState.Loaded && contact && (
                    <div>
                        {contact.id}
                        <Button onClick={onSubmit}>Submit</Button>
                    </div>
                )}
            </Container>
        </Modal>
    )
}
