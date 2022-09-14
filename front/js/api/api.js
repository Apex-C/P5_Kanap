class Api {
    constructor(url) {
        this._url = url
    }
    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(resulta => resulta)
            .catch(err => console.log('an error occurs', err))
    }

}

class kanapApi extends Api {
    constructor(url) {
        super(url)
    }
    async getKanap() {
        return this.get()
    }
}