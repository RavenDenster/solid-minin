// Dependency inversion principle

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clienGet() {
        return this.fetch.request('vk.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.LocalStorage = new LocalStorage()
    }

    clienGet(key) {
        return this.LocalStorage.get(key)
    }
}

class Database {
    constructor(client) {
        this.client = client
    }

    getData(key) {
        return this.client.clienGet(key)
    }
}

const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'))