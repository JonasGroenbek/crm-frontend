import styled from 'styled-components'
import { Document } from '../../../models/entities'
import { DocumentsTable } from '../../general/tables/DocumentsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const DocumentsRoute = () => {
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (document: Document) => document.id,
        },
    ]
    return (
        <Container>
            <DocumentsTable columns={columns} />
        </Container>
    )
}
