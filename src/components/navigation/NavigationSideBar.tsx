import { Menu, MenuProps } from 'antd'
import {
    CalendarOutlined,
    MailOutlined,
    FileDoneOutlined,
    FileOutlined,
    ToolOutlined,
    UserOutlined,
    FileZipOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Paths } from '../../App'

const MenuItem = Menu.Item

export const NavigationSideBar = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log(e)
    }

    return (
        <Menu onClick={onClick} style={{ width: 256 }} mode="vertical" tabIndex={0}>
            <MenuItem key={0} icon={<FileOutlined />} title="Leads">
                <Link to={Paths.Leads}>Leads</Link>
            </MenuItem>
            <MenuItem key={1} icon={<FileDoneOutlined />} title="Deals">
                <Link to={Paths.Deals}>Deals</Link>
            </MenuItem>
            <MenuItem key={2} icon={<FileZipOutlined />} title="Documents">
                <Link to={Paths.Documents}>Documents</Link>
            </MenuItem>
            <MenuItem key={3} icon={<MailOutlined />} title="Mails">
                <Link to={Paths.Mails}>Mails</Link>
            </MenuItem>
            <MenuItem key={4} icon={<CalendarOutlined />} title="Tasks">
                <Link to={Paths.Tasks}>Tasks</Link>
            </MenuItem>
            <MenuItem key={5} icon={<UserOutlined />} title="Connections">
                <Link to={Paths.Connections}>Connections</Link>
            </MenuItem>
            <MenuItem key={6} icon={<ToolOutlined />} title="Settings">
                <Link to={Paths.Leads}>Settings</Link>
            </MenuItem>
        </Menu>
    )
}
