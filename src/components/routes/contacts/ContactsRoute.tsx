import styled from 'styled-components'
import { Contact } from '../../../models/entities'
import { ContactsTable } from '../../general/tables/ContactsTable'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const ContactsRoute = () => {
    const columns = [
        {
            title: 'Id',
            key: 'id',
            render: (contact: Contact) => contact.id,
        },
    ]
    return (
        <Container>
            <ContactsTable columns={columns} />
        </Container>
    )
}
