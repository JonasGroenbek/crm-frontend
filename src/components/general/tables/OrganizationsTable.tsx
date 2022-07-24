import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { useEffect, useState } from 'react'
import { getLeadsRequest } from '../../../http/back-end/leads'
import { getOrganizationsRequest } from '../../../http/back-end/organizations'
import { Organization } from '../../../models/entities'
import { errorNotification } from '../notification'
import './table.css'

interface Props {
    columns: ColumnsType<Organization>
}
export const OrganizationsTable = ({ columns }: Props) => {
    const rowsPerPageOptions = [10, 20, 50, 100]
    type RowsPerPageOptions = typeof rowsPerPageOptions[number] // 10 | 20 | 50 | 100
    const [page, setPage] = useState<number>(1)
    const [rowsPerPage, setRowsPerPage] = useState<RowsPerPageOptions>(10)
    const [amount, setAmount] = useState<number>(0)
    const [organizations, setOrganizations] = useState<Organization[]>([])
    const pageChange = (page: number, pageSize: number) => {
        setPage(page)
        setRowsPerPage(pageSize)
    }
    const getOrganizations = async () => {
        const response = await getOrganizationsRequest({
            offset: page * rowsPerPage - rowsPerPage,
            limit: rowsPerPage,
        })
        if (response.successful) {
            setOrganizations(response.data.organizations)
            setAmount(response.data.count ?? 0)
        } else {
            errorNotification('Failed to get users', response.message)
        }
    }

    useEffect(() => {
        getOrganizations()
    }, [page, rowsPerPage])

    return (
        <Table
            className="antd-table-full-width"
            dataSource={organizations}
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
