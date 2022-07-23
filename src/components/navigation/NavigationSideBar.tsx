import { Menu, MenuProps } from 'antd'
import {
    CalendarOutlined,
    MailOutlined,
    FileDoneOutlined,
    FileOutlined,
    ToolOutlined,
    UserOutlined,
    InboxOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../App'
import styled from 'styled-components'
import { ItemType } from 'antd/lib/menu/hooks/useItems'

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-drection: column;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
`

interface Props {
    children?: JSX.Element | JSX.Element[]
}

export const NavigationSideBar = ({ children }: Props) => {
    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = (e) => {
        navigate(`/${e.key}`, { replace: true })
    }

    const items: ItemType[] = [
        { label: 'Leads', key: Paths.Leads, icon: <FileOutlined /> },
        { label: 'Deals', key: Paths.Deals, icon: <FileDoneOutlined /> },
        {
            label: 'Documents',
            key: Paths.Documents,
            icon: <MailOutlined />,
        },
        {
            label: 'Products',
            key: Paths.Products,
            icon: <InboxOutlined />,
        },
        {
            label: 'Mails',
            key: Paths.Mails,
            icon: <MailOutlined />,
        },
        {
            label: 'Tasks',
            key: Paths.Tasks,
            icon: <CalendarOutlined />,
        },
        {
            label: 'Contacts',
            key: Paths.Contacts,
            icon: <UsergroupAddOutlined />,
        },
        {
            label: 'Settings',
            key: Paths.Settings,
            icon: <ToolOutlined />,
        },
        {
            label: 'Profile',
            key: Paths.Profile,
            icon: <UserOutlined />,
        },
    ]

    return (
        <Container>
            <Menu onClick={onClick} style={{ width: 150 }} mode="vertical" items={items} />

            <ContentContainer>{children}</ContentContainer>
        </Container>
    )
}
