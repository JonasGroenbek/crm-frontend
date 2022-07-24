import { configureStore } from '@reduxjs/toolkit'
import activitiesSlice from './slices/activities-slice'
import companySlice from './slices/company-slice'
import contactsSlice from './slices/contacts-slice'
import dealsSlice from './slices/deals-slice'
import identitySlice from './slices/identity-slice'
import leadsSlice from './slices/leads-slice'
import mailsSlice from './slices/mails-slice'
import modalsSlice from './slices/modals-slice'
import productsSlice from './slices/products-slice'
import settingsSlice from './slices/settings-slice'

export const store = configureStore({
    reducer: {
        activities: activitiesSlice,
        leads: leadsSlice,
        contacts: contactsSlice,
        deals: dealsSlice,
        identity: identitySlice,
        mails: mailsSlice,
        products: productsSlice,
        settings: settingsSlice,
        company: companySlice,
        modals: modalsSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
