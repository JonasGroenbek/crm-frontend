import { useSelector } from 'react-redux'
import { RootState } from '../../store'

interface Props {
    element: JSX.Element
}
export const AuthenticatedComponent = ({ element }: Props) => {
    const { identity } = useSelector((state: RootState) => state.identity)
    return identity !== undefined ? element : null
}
