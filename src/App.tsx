import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NavigationSideBar } from './components/navigation/NavigationSideBar'
import { TasksRoute } from './components/routes/tasks/TasksRoute'
import { AuthenticatedRoute } from './components/routes/AuthenticatedRoute'
import { ConnectionsRoute } from './components/routes/connections/ConnectionsRoute'
import { DealsRoute } from './components/routes/deals/DealsRoute'
import { DocumentsRoute } from './components/routes/documents/DocumentsRoute'
import { LeadsRoute } from './components/routes/leads/LeadsRoute'
import { LoginRoute } from './components/routes/front/FrontRoute'
import { MailsRoute } from './components/routes/mails/MailsRoute'
import { NoMatchRoute } from './components/routes/no-match/NoMatch'
import { ProductsRoute } from './components/routes/products/ProductsRoute'
import { SettingsRoute } from './components/routes/settings/SettingsRoute'
import { AuthenticatedComponent } from './components/util/AuthenticatedComponent'
import { store } from './store'
import { AuthenticateModal } from './components/general/modals/AuthenticateModal'
import styled from 'styled-components'

export enum Paths {
    Tasks = 'tasks',
    Connections = 'connections',
    Deals = 'deals',
    Documents = 'documents',
    Leads = 'leads',
    Mails = 'mails',
    Products = 'products',
    Settings = 'settings',
    Login = 'login',
    Front = '',
}

const Columns = styled.div`
    display: flex;
    flex-direction: row;
`

export const App = () => {
    useEffect(() => {
        //
    }, [])

    return (
        <Provider store={store}>
            <Columns>
                <Router>
                    <AuthenticatedComponent element={<NavigationSideBar />} />
                    <Routes>
                        <Route path={Paths.Login} element={<LoginRoute />} />
                        <Route path={Paths.Front} element={<LoginRoute />} />
                        <Route
                            path={Paths.Tasks}
                            element={<AuthenticatedRoute element={<TasksRoute />} />}
                        />
                        <Route
                            path={Paths.Connections}
                            element={<AuthenticatedRoute element={<ConnectionsRoute />} />}
                        />
                        <Route
                            path={Paths.Deals}
                            element={<AuthenticatedRoute element={<DealsRoute />} />}
                        />
                        <Route
                            path={Paths.Documents}
                            element={<AuthenticatedRoute element={<DocumentsRoute />} />}
                        />
                        <Route
                            path={Paths.Leads}
                            element={<AuthenticatedRoute element={<LeadsRoute />} />}
                        />
                        <Route
                            path={Paths.Mails}
                            element={<AuthenticatedRoute element={<MailsRoute />} />}
                        />
                        <Route
                            path={Paths.Products}
                            element={<AuthenticatedRoute element={<ProductsRoute />} />}
                        />
                        <Route
                            path={Paths.Settings}
                            element={<AuthenticatedRoute element={<SettingsRoute />} />}
                        />
                        <Route path="*" element={<NoMatchRoute />} />
                    </Routes>
                    {/** Modals */}
                    <AuthenticateModal />
                </Router>
            </Columns>
        </Provider>
    )
}
