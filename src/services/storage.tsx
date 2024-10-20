interface IDioBank {
    name?: string
    email?: string
    isLoggedIn: boolean
}

const diobank = {
    name: undefined,
    email: undefined,
    isLoggedIn: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(diobank))
}

export const changeLocalStorage = (diobank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(diobank))
}