//storage.tsx dentro da pasta src/services
interface IDioBank {
    login: boolean
}

const diobank = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('dioBank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(diobank))
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
    localStorage.setItem('dioBank', JSON.stringify(dioBank))
}