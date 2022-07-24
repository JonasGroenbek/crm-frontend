import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Role } from '../../models/entities'
import { selectIsAuthenticated } from '../../slices/identity-slice'
import { RootState } from '../../store'
import { NavigationSideBar } from '../navigation/NavigationSideBar'

interface Props {
    element: JSX.Element
    roles: Role[]
}
export const AuthenticatedRoute = ({ element, roles }: Props) => {
    const role = useSelector((state: RootState) => state.identity.identity?.role)
    const isAuthenticated = useSelector(selectIsAuthenticated)

    console.log(role)

    console.log(roles)

    return isAuthenticated && role && roles.includes(role) ? (
        <NavigationSideBar>{element}</NavigationSideBar>
    ) : (
        <Navigate replace to="/" />
    )
}
