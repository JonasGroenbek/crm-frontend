import { Button, Modal, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getLeadByIdRequest } from '../../../../http/back-end/leads'
import { Lead } from '../../../../models/entities'
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

export const UpdateLeadModal = () => {
    const { display, subjectId } = useSelector((state: RootState) => state.modals)
    const dispatch = useDispatch()
    const [ldea, setLead] = useState<Lead>()
    const [subjectState, setSubjectState] = useState<SubjectState>(SubjectState.Loading)

    const getLead = async () => {
        if (!subjectId) {
            setSubjectState(SubjectState.Error)
            return
        }
        const response = await getLeadByIdRequest(subjectId)
        if (response.successful) {
            setLead(response.data)
            setSubjectState(SubjectState.Loaded)
        } else {
            errorNotification('Failed', 'Failed to load the requested ldea')
            setSubjectState(SubjectState.Error)
            onCancel()
        }
    }

    useEffect(() => {
        getLead()
    }, [])

    const onCancel = () => {
        dispatch(closeModal())
    }

    const onSubmit = () => {
        infoNotification('Not implemented', 'this function is yet to be implemented')
    }

    return (
        <Modal
            title={'Update Lead'}
            visible={display === ActiveModal.UpdateLeadModal}
            footer={[]}
            onCancel={onCancel}
        >
            <Container>
                {subjectState === SubjectState.Loading && <Spin />}
                {subjectState === SubjectState.Error && (
                    <div>Something went wrong while loading the requested ldea</div>
                )}
                {subjectState === SubjectState.Loaded && ldea && (
                    <div>
                        {ldea.id}
                        <Button onClick={onSubmit}>Submit</Button>
                    </div>
                )}
            </Container>
        </Modal>
    )
}
