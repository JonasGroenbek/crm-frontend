import { Button, Input } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import { ModalMode } from '../AuthenticateModal'

const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`

export interface ForgotPasswordProps {
    onCancel: () => void
    setMode: (mode: ModalMode) => void
}

export const ForgotPassword = ({ onCancel, setMode }: ForgotPasswordProps) => {
    const [email, setEmail] = useState<string>('')

    const onForgotPassword = () => {
        return null
    }

    return (
        <Container>
            <Input
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Button onClick={onForgotPassword}>Log in</Button>
            <Button type="text" onClick={() => setMode(ModalMode.Login)}>
                Have you remembered the password?
            </Button>
        </Container>
    )
}
