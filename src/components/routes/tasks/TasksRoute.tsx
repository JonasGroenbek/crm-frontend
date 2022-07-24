import styled from 'styled-components'
import { Task } from '../../../models/entities'
import { TasksTable } from '../../general/tables/TasksTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const TasksRoute = () => {
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (task: Task) => task.id,
        },
    ]
    return (
        <Container>
            <TasksTable columns={columns} />
        </Container>
    )
}
