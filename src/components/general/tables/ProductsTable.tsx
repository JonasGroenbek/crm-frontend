import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { useEffect, useState } from 'react'
import { getProductsRequest } from '../../../http/back-end/products'
import { Product } from '../../../models/entities'
import { errorNotification } from '../notification'
import './table.css'

interface Props {
    columns: ColumnsType<Product>
}
export const ProductsTable = ({ columns }: Props) => {
    const rowsPerPageOptions = [10, 20, 50, 100]
    type RowsPerPageOptions = typeof rowsPerPageOptions[number] // 10 | 20 | 50 | 100
    const [page, setPage] = useState<number>(1)
    const [rowsPerPage, setRowsPerPage] = useState<RowsPerPageOptions>(10)
    const [amount, setAmount] = useState<number>(0)
    const [products, setProducts] = useState<Product[]>([])
    const pageChange = (page: number, pageSize: number) => {
        setPage(page)
        setRowsPerPage(pageSize)
    }
    const getProducts = async () => {
        const response = await getProductsRequest({
            offset: page * rowsPerPage - rowsPerPage,
            limit: rowsPerPage,
        })
        if (response.successful) {
            setProducts(response.data.products)
            setAmount(response.data.count ?? 0)
        } else {
            errorNotification('Failed to get users', response.message)
        }
    }

    useEffect(() => {
        getProducts()
    }, [page, rowsPerPage])

    return (
        <Table
            className="antd-table-full-width"
            dataSource={products}
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
