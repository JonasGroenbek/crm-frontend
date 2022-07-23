import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TasksRoute } from './components/routes/tasks/TasksRoute'
import { AuthenticatedRoute } from './components/routes/AuthenticatedRoute'
import { DealsRoute } from './components/routes/deals/DealsRoute'
import { DocumentsRoute } from './components/routes/documents/DocumentsRoute'
import { LeadsRoute } from './components/routes/leads/LeadsRoute'
import { LoginRoute } from './components/routes/front/FrontRoute'
import { MailsRoute } from './components/routes/mails/MailsRoute'
import { NoMatchRoute } from './components/routes/no-match/NoMatch'
import { ProductsRoute } from './components/routes/products/ProductsRoute'
import { SettingsRoute } from './components/routes/settings/SettingsRoute'
import { AuthenticateModal } from './components/general/modals/AuthenticateModal'
import { LOCAL_STORAGE_TOKEN_KEY } from './http/back-end/backend-connection'
import { authenticateRequest } from './http/back-end/identity'
import { setIdentity, setJwt } from './slices/identity-slice'
import { AboutRoute } from './components/routes/about/AboutRoute'
import { ProfileRoute } from './components/routes/profile/ProfileRoute'
import { ContactsRoute } from './components/routes/contacts/ContactsRoute'

export enum Paths {
    Tasks = 'tasks',
    Contacts = 'contacts',
    Deals = 'deals',
    Documents = 'documents',
    Leads = 'leads',
    Mails = 'mails',
    Products = 'products',
    Settings = 'settings',
    Login = 'login',
    About = 'about',
    Profile = 'profile',
    Front = '',
}

export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(window.location.pathname)
        const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
        if (token) {
            authenticateRequest().then((response) => {
                if (response.successful) {
                    dispatch(setJwt(response.data.jwt))
                    dispatch(setIdentity(response.data.identity))
                }
            })
        }
    }, [])

    return (
        <Router>
            <Routes>
                <Route path={Paths.Front} element={<LoginRoute />} />
                <Route path={Paths.About} element={<AboutRoute />} />
                <Route
                    path={Paths.Tasks}
                    element={<AuthenticatedRoute element={<TasksRoute />} />}
                />
                <Route
                    path={Paths.Contacts}
                    element={<AuthenticatedRoute element={<ContactsRoute />} />}
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
                <Route
                    path={Paths.Profile}
                    element={<AuthenticatedRoute element={<ProfileRoute />} />}
                />
                <Route path="*" element={<NoMatchRoute />} />
            </Routes>
            {/** Modals */}
            <AuthenticateModal />
        </Router>
    )
}
