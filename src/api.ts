const conta = {
    name: 'Hudson Fernando',
    email: 'hudsfern@gmail.com',
    password: '123456',
    balance: 5000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})