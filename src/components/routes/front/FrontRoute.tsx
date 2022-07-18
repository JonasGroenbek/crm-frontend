import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setAuthenticationModalVisible } from '../../../slices/identity-slice'

const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const LoginRoute = () => {
    const dispatch = useDispatch()

    return (
        <Container>
            <Button
                onClick={() => {
                    dispatch(setAuthenticationModalVisible(true))
                }}
            >
                Open login modal
            </Button>
        </Container>
    )
}
