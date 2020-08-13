import { LightningElement, api } from 'lwc';

export default class CustomerTile extends LightningElement {

    @api customer;
    @api object;

    connectedCallBack() {

    }

    get icon() {
        return 'doctype:image';
    }

    get alttext() {
        return 'image';
    }
}