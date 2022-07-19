import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsAuthenticated } from '../../slices/identity-slice'
import { NavigationSideBar } from '../navigation/NavigationSideBar'

interface Props {
    element: JSX.Element
}
export const AuthenticatedRoute = ({ element }: Props) => {
    const isAuthenticated = useSelector(selectIsAuthenticated)
    return isAuthenticated ? (
        <NavigationSideBar>{element}</NavigationSideBar>
    ) : (
        <Navigate replace to="/" />
    )
}
