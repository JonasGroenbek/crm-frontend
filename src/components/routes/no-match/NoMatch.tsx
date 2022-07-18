import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

export const NoMatchRoute = () => {
    return (
        <Container>
            <p>No match</p>
        </Container>
    )
}
