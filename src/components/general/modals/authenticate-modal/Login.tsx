import { Button, Input } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Paths } from '../../../../App'
import { loginRequest } from '../../../../http/back-end/identity'
import { setJwt, setUser } from '../../../../slices/identity-slice'
import { validateLogin } from '../../../util/validation'
import { errorNotification } from '../../notification'
import { ModalMode } from '../AuthenticateModal'

const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`

export interface LoginProps {
    onCancel: () => void
    setMode: (mode: ModalMode) => void
}

export const Login = ({ onCancel, setMode }: LoginProps) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogin = async () => {
        const response = await loginRequest({ email, password })
        if (response.successful) {
            dispatch(setJwt(response.data.jwt))
            dispatch(setUser(response.data.user))
            navigate(Paths.Leads)
            onCancel()
        } else {
            errorNotification('Could not log in', response.message)
        }
    }

    const disableLogin = !validateLogin(email, password)

    return (
        <Container>
            <Input
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Input
                placeholder="Password"
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button disabled={disableLogin} onClick={onLogin}>
                Log in
            </Button>
            <Button
                type="text"
                onClick={() => setMode(ModalMode.SignUp)}
            >{`Don't have a user?`}</Button>
        </Container>
    )
}
