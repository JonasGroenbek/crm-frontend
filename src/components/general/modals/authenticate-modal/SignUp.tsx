import { Button, Input } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Paths } from '../../../../App'
import { signUpRequest } from '../../../../http/back-end/identity'
import { setJwt, setUser } from '../../../../slices/identity-slice'
import { validateSignUp } from '../../../util/validation'
import { errorNotification } from '../../notification'
import { ModalMode } from '../AuthenticateModal'

const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`

export interface SignUpProps {
    onCancel: () => void
    setMode: (mode: ModalMode) => void
}

export const SignUp = ({ onCancel, setMode }: SignUpProps) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogin = async () => {
        const response = await signUpRequest({ email, password })
        if (response.successful) {
            dispatch(setJwt(response.data.jwt))
            dispatch(setUser(response.data.user))
            navigate(Paths.Leads)
            onCancel()
        } else {
            errorNotification('Could not log in', response.message)
        }
    }

    const disablSignUpButton = !validateSignUp(email, password, repeatPassword)

    return (
        <Container>
            <Input
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Input
                placeholder="Repeat Password"
                type="password"
                value={repeatPassword}
                onChange={(event) => setRepeatPassword(event.target.value)}
            />
            <Button disabled={disablSignUpButton} onClick={onLogin}>
                Sign up
            </Button>
            <Button type="text" onClick={() => setMode(ModalMode.Login)}>
                Already have a user?
            </Button>
        </Container>
    )
}
