export const validateInBetween = (min: number, max: number, value: number) =>
    value <= max && value >= min

export const validateFirstName = (firstName: string) => {
    return firstName.length > 1
}

export const validateLogin = (email: string, password: string) => {
    return validatePassword(password) && validateEmail(email)
}

export const validateLastName = (lastName: string) => {
    return lastName.length > 1
}

export const validatePassword = (password: string) => {
    return password.length > 7
}

export const validatePasswords = (password: string, repeatedPassword: string) => {
    return validatePassword(password) && password === repeatedPassword
}

export const validateResetPassword = (password: string, repeatPassword: string) => {
    return validatePassword(password) && password === repeatPassword
}

export const validateDanishPhone = (phone: string) => {
    return /^[2-9]\d{7}$/.test(phone) || phone.length === 0
}

export const validateEmail = (email: string) => {
    // eslint-disable-next-line no-useless-escape
    const re =
        /^(([^<>()[\]\\.,:\s@\"]+(\.[^<>()[\]\\.,:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

export const validateSignUp = (email: string, password: string, repeatPassword: string) =>
    validateEmail(email) &&
    validatePassword(password) &&
    validatePasswords(password, repeatPassword)
