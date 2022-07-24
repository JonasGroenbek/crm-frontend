import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Contact } from '../../../models/entities'
import { ActiveModal, openModal } from '../../../slices/modals-slice'
import { ContactsTable } from '../../general/tables/ContactsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const ContactsRoute = () => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (contact: Contact) => contact.id,
        },
    ]
    return (
        <Container>
            <Button onClick={() => dispatch(openModal({ modal: ActiveModal.CreateContactModal }))}>
                Create Contact
            </Button>
            <ContactsTable columns={columns} />
        </Container>
    )
}
