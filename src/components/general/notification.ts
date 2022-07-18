import { notification } from 'antd'

export const blankNotification = (title: string, text: string, onClick?: () => void) => {
    notification.open({
        message: title,
        description: text,
        onClick: () => {
            if (onClick !== undefined) {
                onClick()
            }
        },
    })
}

export const infoNotification = (title: string, text: string, onClick?: () => void) => {
    notification.info({
        message: title,
        description: text,
        onClick: () => {
            if (onClick !== undefined) {
                onClick()
            }
        },
    })
}

export const errorNotification = (title: string, text: string, onClick?: () => void) => {
    notification.error({
        message: title,
        description: text,
        onClick: () => {
            if (onClick !== undefined) {
                onClick()
            }
        },
    })
}

export const successNotification = (title: string, text: string, onClick?: () => void) => {
    notification.success({
        message: title,
        description: text,
        onClick: () => {
            if (onClick !== undefined) {
                onClick()
            }
        },
    })
}

export const warningNotification = (title: string, text: string, onClick?: () => void) => {
    notification.warning({
        message: title,
        description: text,
        onClick: () => {
            if (onClick !== undefined) {
                onClick()
            }
        },
    })
}
