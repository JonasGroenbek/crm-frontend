import { Tabs } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ActiveTab, setActiveTab } from '../../../slices/company-slice'
import { RootState } from '../../../store'
import { SubscriptionTab } from './subscription/SubscriptionTab'
import { UsersTab } from './users/UsersTab'

const { TabPane } = Tabs

const Container = styled.div`
    display: flex;
    width: 100%;
`

export const CompanyRoute = () => {
    const { activeTab } = useSelector((state: RootState) => state.company)
    const dispatch = useDispatch()
    const onChange = (key: string) => {
        dispatch(setActiveTab(key as ActiveTab))
    }
    return (
        <Container>
            <Tabs
                defaultActiveKey="1"
                activeKey={activeTab}
                onChange={onChange}
                style={{ width: '100%' }}
            >
                <TabPane tab="Users" key={ActiveTab.Users}>
                    <UsersTab />
                </TabPane>
                <TabPane tab="Subscription" key={ActiveTab.Subscription}>
                    <SubscriptionTab />
                </TabPane>
            </Tabs>
        </Container>
    )
}
