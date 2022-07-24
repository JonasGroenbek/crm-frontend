import { Modal } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ActiveModal, closeModal } from '../../../../slices/modals-slice'
import { RootState } from '../../../../store'
import { ForgotPassword, ForgotPasswordProps } from './authenticate-modal/ForgotPassword'
import { Login, LoginProps } from './authenticate-modal/Login'
import { SignUp, SignUpProps } from './authenticate-modal/SignUp'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
`

export enum ModalMode {
    Login = 'Login',
    SignUp = 'SignUp',
    ForgotPassword = 'ForgotPassword',
}

const Content: {
    [key in ModalMode]: (props: LoginProps | SignUpProps | ForgotPasswordProps) => JSX.Element
} = {
    Login: (props: LoginProps) => <Login {...props} />,
    SignUp: (props: SignUpProps) => <SignUp {...props} />,
    ForgotPassword: (props: SignUpProps) => <ForgotPassword {...props} />,
}

export const AuthenticateModal = () => {
    const { display } = useSelector((state: RootState) => state.modals)
    const [mode, setMode] = useState<ModalMode>(ModalMode.Login)
    const dispatch = useDispatch()

    const onCancel = () => {
        dispatch(closeModal())
    }

    return (
        <Modal
            title={'Log in'}
            visible={display === ActiveModal.AuthenticateModal}
            footer={[]}
            onCancel={onCancel}
        >
            <Container>{Content[mode]({ onCancel, setMode })}</Container>
        </Modal>
    )
}
