import styled from 'styled-components'
import { NavigationTopBar } from '../../navigation/NavigationTopBar'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const LoginRoute = () => {
    return (
        <Container>
            <NavigationTopBar />
            Main page
        </Container>
    )
}
