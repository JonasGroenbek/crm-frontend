import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Document } from '../../../models/entities'
import { ActiveModal, openModal } from '../../../slices/modals-slice'
import { DocumentsTable } from '../../general/tables/DocumentsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const DocumentsRoute = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (document: Document) => document.id,
        },
    ]
    return (
        <Container>
            <Button onClick={() => dispatch(openModal({ modal: ActiveModal.CreateDocumentModal }))}>
                Create Document
            </Button>
            <DocumentsTable columns={columns} />
        </Container>
    )
}
