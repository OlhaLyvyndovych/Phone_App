import PhonesCatalog from './phones-catalog.js';
import Component from './component.js';
import PhoneViewer from './phone-viewer.js'

export default class ShoppingCart extends Component{
    constructor({ element }) {
        super({ element });
        this._element = element;

    }
}
