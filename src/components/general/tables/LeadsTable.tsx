import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { useEffect, useState } from 'react'
import { getLeadsRequest } from '../../../http/back-end/leads'
import { Lead } from '../../../models/entities'
import { errorNotification } from '../notification'
import './table.css'

interface Props {
    columns: ColumnsType<Lead>
}
export const LeadsTable = ({ columns }: Props) => {
    const rowsPerPageOptions = [10, 20, 50, 100]
    type RowsPerPageOptions = typeof rowsPerPageOptions[number] // 10 | 20 | 50 | 100
    const [page, setPage] = useState<number>(1)
    const [rowsPerPage, setRowsPerPage] = useState<RowsPerPageOptions>(10)
    const [amount, setAmount] = useState<number>(0)
    const [leads, setLeads] = useState<Lead[]>([])
    const pageChange = (page: number, pageSize: number) => {
        setPage(page)
        setRowsPerPage(pageSize)
    }
    const getLeads = async () => {
        const response = await getLeadsRequest({
            offset: page * rowsPerPage - rowsPerPage,
            limit: rowsPerPage,
        })
        if (response.successful) {
            setLeads(response.data.leads)
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
            dataSource={leads}
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
