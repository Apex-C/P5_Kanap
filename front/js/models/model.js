class Kanap {
    constructor(data) {
        this._colors = data.colors
        this._id = data._id
        this._name = data.name
        this._price = data._price
        this._imageUrl = data.imageUrl
        this._altTxt = data.altTxt
        this._description = data.description
    }

    get colors() {
        return this._colors
    }
    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get price() {
        return this._price
    }

    get picture() {
        return this._imageUrl
    }
    get altTxt() {
        return this._altTxt
    }

    get description() {
        return this._description
    }
}