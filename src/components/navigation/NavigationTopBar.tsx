import { Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../App'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuthenticated, setAuthenticationModalVisible } from '../../slices/identity-slice'

export enum Action {
    Login = 'Login',
    OpenApp = 'OpenApp',
}

export const NavigationTopBar = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(selectIsAuthenticated)
    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = (e) => {
        if (Object.values(Action).includes(e.key as Action)) {
            if (e.key === Action.Login) {
                dispatch(setAuthenticationModalVisible(true))
            }
            if (e.key === Action.OpenApp) {
                navigate(`/${Paths.Leads}`, { replace: true })
            }
            return
        }
        navigate(`/${e.key}`, { replace: true })
    }

    const items: ItemType[] = [
        { label: 'Main', key: Paths.Front },
        { label: 'About', key: Paths.About },
    ]

    if (!isAuthenticated) {
        items.push({
            label: 'Log in',
            key: Action.Login,
            onClick: () => null,
        })
    } else {
        items.push({
            label: 'Open App',
            key: Action.OpenApp,
            onClick: () => null,
        })
    }

    return (
        <Menu
            onClick={onClick}
            style={{ width: '100%' }}
            mode="horizontal"
            tabIndex={0}
            items={items}
        />
    )
}
