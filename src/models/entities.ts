enum SubscriptionStatus {
    Active = 'Active',
    Past_due = 'PastDue',
    Unpaid = 'Unpaid',
    Canceled = 'Cancelled',
    Incomplete = 'Incomplete',
    Incomplete_expired = 'IncompleteExpired',
    Trialing = 'Trialing',
    All = 'All',
    Ended = 'Ended',
}

export interface Tenant {
    id: number
    subscriptionId: number
    subscriptionStatus: SubscriptionStatus
    organizations: Organization[]
    tasks: Task[]
    mails: Mail[]
    leads: Lead[]
    deals: Deal[]
    contacts: Contact[]
    documents: Document[]
    identities: Identity[]
    settings: Settings[]
}

export interface Organization {
    id: number
    phone: string
    email: string
    tenantId: number
    tenant: Tenant
    contacts: Contact[]
    ownerId: number
    owner: Identity
}

export interface Task {
    id: number
    tenantId: number
    tenant: Tenant
    ownerId: number
    owner: Identity
}

export interface Product {
    id: number
    tenantId: number
    tenant: Tenant
    ownerId: number
    owner: Identity
}

export interface Settings {
    id: number
    tenantId: number
    tenant: Tenant
}

export interface Organization {
    id: number
    phone: string
    email: string
    tenantId: number
    tenant: Tenant
    contacts: Contact[]
    ownerId: number
    owner: Identity
}

export interface Mail {
    id: number
    tenantId: number
    tenant: Tenant
    ownerId: number
    owner: Identity
}

export interface Lead {
    id: number
    tenantId: number
    tenant: Tenant
    ownerId: number
    owner: Identity
}

export enum Role {
    Admin = 'Admin',
    Sales = 'Sales',
}

export interface Identity {
    id: number
    email: string
    role: Role
    password: string
    tenantId: number
    tenant: Tenant
    organizations: Organization[]
    tasks: Task[]
    mails: Mail[]
    leads: Lead[]
    deals: Deal[]
    contacts: Contact[]
    documents: Document[]
}

export interface Document {
    id: number
    tenantId: number
    tenant: Tenant
    ownerId: number
    owner: Identity
}

export interface Deal {
    id: number
    tenantId: number
    tenant: Tenant
    ownerId: number
    owner: Identity
}

export interface Contact {
    id: number
    phone: string
    type: ConnectionType
    tenantId: number
    tenant: Tenant
    organizationId: number
    organization: Organization
    email: string
    ownerId: number
    owner: Identity
}
