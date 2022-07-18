import { useSelector } from 'react-redux'
import { RootState } from '../../store'

interface Props {
    element: JSX.Element
}
export const AuthenticatedComponent = ({ element }: Props) => {
    const user = useSelector((state: RootState) => state.identity.user)
    return user !== undefined ? element : null
}
