const saveLocalStorage = (name, newItem) => {
    if(!localStorage.getItem(name)) {
        localStorage.setItem(name, JSON.stringify([newItem]))
    } else {
        let items = JSON.parse(localStorage.getItem(name))
        let newItems = [...items, newItem]
        localStorage.setItem(name, JSON.stringify(newItems))
    }
}

const readLocalStorage = (name) => {
    if(localStorage.getItem(name)) {
        const items = JSON.parse(localStorage.getItem(name))
        return items
    }
    return []
}

export { saveLocalStorage, readLocalStorage }