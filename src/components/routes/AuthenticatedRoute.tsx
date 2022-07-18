import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../store'

interface Props {
    element: JSX.Element
}
export const AuthenticatedRoute = ({ element }: Props) => {
    const user = useSelector((state: RootState) => state.identity.user)
    return user !== undefined ? element : <Navigate to="" />
}
