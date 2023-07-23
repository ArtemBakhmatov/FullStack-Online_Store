import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 2, name: 'Смартфоны' }
        ];
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' }
        ];
        this._devices = [
            { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://tehno37.ru/image/cache/catalog/alexeioblojki/%21%21%21%21apple/12promax/iphone12promax512blue1-400x300.jpg'},
            { id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://tehno37.ru/image/cache/catalog/alexeioblojki/%21%21%21%21apple/12promax/iphone12promax512blue1-400x300.jpg'},
            { id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://tehno37.ru/image/cache/catalog/alexeioblojki/%21%21%21%21apple/12promax/iphone12promax512blue1-400x300.jpg'},
            { id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://tehno37.ru/image/cache/catalog/alexeioblojki/%21%21%21%21apple/12promax/iphone12promax512blue1-400x300.jpg'}   
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }
    
    get devices() {
        return this._devices;
    }
}