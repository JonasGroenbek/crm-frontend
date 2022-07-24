import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Task } from '../../../models/entities'
import { ActiveModal, openModal } from '../../../slices/modals-slice'
import { TasksTable } from '../../general/tables/TasksTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const TasksRoute = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (task: Task) => task.id,
        },
    ]
    return (
        <Container>
            <Button onClick={() => dispatch(openModal({ modal: ActiveModal.CreateTaskModal }))}>
                Create Task
            </Button>
            <TasksTable columns={columns} />
        </Container>
    )
}
