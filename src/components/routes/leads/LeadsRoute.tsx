import { Table } from 'antd'
import { useEffect } from 'react'
import styled from 'styled-components'
import { getLeadsRequest } from '../../../http/back-end/leads'

const Container = styled.div`
    display: flex;
`

export const LeadsRoute = () => {
    useEffect(() => {
        getLeadsRequest({ limit: 1, offset: 1 })
    }, [])

    return (
        <Container>
            <Table />
        </Container>
    )
}
