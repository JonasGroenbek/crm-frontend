import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { useEffect, useState } from 'react'
import { getDocumentsRequest } from '../../../http/back-end/documents'
import { getIdentitiesRequest } from '../../../http/back-end/identity'
import { Document, Identity } from '../../../models/entities'
import { errorNotification } from '../notification'
import './table.css'

interface Props {
    columns: ColumnsType<Document>
}
export const DocumentsTable = ({ columns }: Props) => {
    const rowsPerPageOptions = [10, 20, 50, 100]
    type RowsPerPageOptions = typeof rowsPerPageOptions[number] // 10 | 20 | 50 | 100
    const [page, setPage] = useState<number>(1)
    const [rowsPerPage, setRowsPerPage] = useState<RowsPerPageOptions>(10)
    const [amount, setAmount] = useState<number>(0)
    const [documents, setDocuments] = useState<Document[]>([])
    const pageChange = (page: number, pageSize: number) => {
        setPage(page)
        setRowsPerPage(pageSize)
    }
    const getDocuments = async () => {
        const response = await getDocumentsRequest({
            offset: page * rowsPerPage - rowsPerPage,
            limit: rowsPerPage,
        })
        if (response.successful) {
            setDocuments(response.data.documents)
            setAmount(response.data.count ?? 0)
        } else {
            errorNotification('Failed to get users', response.message)
        }
    }

    useEffect(() => {
        getDocuments()
    }, [page, rowsPerPage])

    return (
        <Table
            className="antd-table-full-width"
            dataSource={documents}
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
