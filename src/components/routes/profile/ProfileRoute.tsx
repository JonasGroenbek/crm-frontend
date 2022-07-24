import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { logOut } from '../../../slices/identity-slice'

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const ProfileRoute = () => {
    const dispatch = useDispatch()
    return (
        <Container>
            Profile<Button onClick={() => dispatch(logOut())}>Log out</Button>
        </Container>
    )
}
