import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { useEffect, useState } from 'react'
import { getContactsRequest } from '../../../http/back-end/contacts'
import { Contact } from '../../../models/entities'
import { errorNotification } from '../notification'
import './table.css'

interface Props {
    columns: ColumnsType<Contact>
}
export const ContactsTable = ({ columns }: Props) => {
    const rowsPerPageOptions = [10, 20, 50, 100]
    type RowsPerPageOptions = typeof rowsPerPageOptions[number] // 10 | 20 | 50 | 100
    const [page, setPage] = useState<number>(1)
    const [rowsPerPage, setRowsPerPage] = useState<RowsPerPageOptions>(10)
    const [amount, setAmount] = useState<number>(0)
    const [contacts, setContacts] = useState<Contact[]>([])
    const pageChange = (page: number, pageSize: number) => {
        setPage(page)
        setRowsPerPage(pageSize)
    }
    const getLeads = async () => {
        const response = await getContactsRequest({
            offset: page * rowsPerPage - rowsPerPage,
            limit: rowsPerPage,
        })
        if (response.successful) {
            setContacts(response.data.contacts)
            setAmount(response.data.count ?? 0)
        } else {
            errorNotification('Failed to get users', response.message)
        }
    }

    useEffect(() => {
        getLeads()
    }, [page, rowsPerPage])

    return (
        <Table
            className="antd-table-full-width"
            dataSource={contacts}
            columns={columns}
            size="small"
            pagination={{
                defaultPageSize: 10,
                current: page,
                onChange: pageChange,
                total: amount,
            }}
        />
    )
}
