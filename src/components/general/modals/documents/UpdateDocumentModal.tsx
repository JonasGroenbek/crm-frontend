import { Button, Modal, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getDocumentByIdRequest } from '../../../../http/back-end/documents'
import { Document } from '../../../../models/entities'
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

export const UpdateDocumentModal = () => {
    const { display, subjectId } = useSelector((state: RootState) => state.modals)
    const dispatch = useDispatch()
    const [document, setDocument] = useState<Document>()
    const [subjectState, setSubjectState] = useState<SubjectState>(SubjectState.Loading)

    const getDocument = async () => {
        if (!subjectId) {
            setSubjectState(SubjectState.Error)
            return
        }
        const response = await getDocumentByIdRequest(subjectId)
        if (response.successful) {
            setDocument(response.data)
            setSubjectState(SubjectState.Loaded)
        } else {
            errorNotification('Failed', 'Failed to load the requested document')
            setSubjectState(SubjectState.Error)
            onCancel()
        }
    }

    useEffect(() => {
        getDocument()
    }, [])

    const onCancel = () => {
        dispatch(closeModal())
    }

    const onSubmit = () => {
        infoNotification('Not implemented', 'this function is yet to be implemented')
    }

    return (
        <Modal
            title={'Update Document'}
            visible={display === ActiveModal.UpdateDocumentModal}
            footer={[]}
            onCancel={onCancel}
        >
            <Container>
                {subjectState === SubjectState.Loading && <Spin />}
                {subjectState === SubjectState.Error && (
                    <div>Something went wrong while loading the requested document</div>
                )}
                {subjectState === SubjectState.Loaded && document && (
                    <div>
                        {document.id}
                        <Button onClick={onSubmit}>Submit</Button>
                    </div>
                )}
            </Container>
        </Modal>
    )
}
