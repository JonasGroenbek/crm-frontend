import { Button, Modal, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getTaskByIdRequest } from '../../../../http/back-end/tasks'
import { Task } from '../../../../models/entities'
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

export const UpdateTaskModal = () => {
    const { display, subjectId } = useSelector((state: RootState) => state.modals)
    const dispatch = useDispatch()
    const [task, setTask] = useState<Task>()
    const [subjectState, setSubjectState] = useState<SubjectState>(SubjectState.Loading)

    const getTask = async () => {
        if (!subjectId) {
            setSubjectState(SubjectState.Error)
            return
        }
        const response = await getTaskByIdRequest(subjectId)
        if (response.successful) {
            setTask(response.data)
            setSubjectState(SubjectState.Loaded)
        } else {
            errorNotification('Failed', 'Failed to load the requested task')
            setSubjectState(SubjectState.Error)
            onCancel()
        }
    }

    useEffect(() => {
        getTask()
    }, [])

    const onCancel = () => {
        dispatch(closeModal())
    }

    const onSubmit = () => {
        infoNotification('Not implemented', 'this function is yet to be implemented')
    }

    return (
        <Modal
            title={'Update Task'}
            visible={display === ActiveModal.UpdateTaskModal}
            footer={[]}
            onCancel={onCancel}
        >
            <Container>
                {subjectState === SubjectState.Loading && <Spin />}
                {subjectState === SubjectState.Error && (
                    <div>Something went wrong while loading the requested task</div>
                )}
                {subjectState === SubjectState.Loaded && task && (
                    <div>
                        {task.id}
                        <Button onClick={onSubmit}>Submit</Button>
                    </div>
                )}
            </Container>
        </Modal>
    )
}
