import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum ActiveModal {
    AuthenticateModal = 'AuthenticateModal',
    CreateDealModal = 'CreateDealModal',
    CreateContactModal = 'CreateContactModal',
    CreateDocumentModal = 'CreateDocumentModal',
    CreateIdentityModal = 'CreateIdentityModal',
    CreateLeadModal = 'CreateLeadModal',
    CreateOrganizationModal = 'CreateOrganizationModal',
    CreateProductModal = 'CreateProductModal',
    CreateTaskModal = 'CreateTaskModal',
    UpdateDealModal = 'UpdateDealModal',
    UpdateContactModal = 'UpdateContactModal',
    UpdateDocumentModal = 'UpdateDocumentModal',
    UpdateIdentityModal = 'UpdateIdentityModal',
    UpdateLeadModal = 'UpdateLeadModal',
    UpdateOrganizationModal = 'UpdateOrganizationModal',
    UpdateProductModal = 'UpdateProductModal',
    UpdateTaskModal = 'UpdateTaskModal',
    None = 'None',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface State {
    display: ActiveModal
    subjectId: number | undefined
}

const initialState: State = {
    display: ActiveModal.None,
    subjectId: undefined,
}

export const mailsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{ modal: ActiveModal; subjectId?: number }>) => {
            state.display = action.payload.modal
            state.subjectId = action.payload.subjectId
        },
        closeModal: (state) => {
            state.display = ActiveModal.None
            state.subjectId = undefined
        },
    },
    extraReducers: (builder) => {
        return {}
    },
})

export const { openModal, closeModal } = mailsSlice.actions

export default mailsSlice.reducer
