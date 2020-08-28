import { LightningElement, api, wire } from 'lwc';
import getCustomerList from '@salesforce/apex/reservationManagerController.getCustomerList';

import TILE_SELECTION_MC from '@salesforce/messageChannel/Tile_Selection__c';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
    publish
} from 'lightning/messageService';

export default class CustomerList extends LightningElement {
    @api sobject;
    customers = [];
    errorMsg;
    msgForUser;
    wiredRecords;

    @wire(MessageContext)
    messageContext;


    connectedCallback() {
    }

    disconnectedCallback() {
    }

    @wire(getCustomerList, { sObjectType: '$sobject' })
    wiredCustomerData(value) {
        this.wiredRecords = value;
        if (value.error) {
            this.errorMsg = value.error;
            this.msgForUser = 'There was an issue loading customers.';
        } else if (value.data) {
            this.customers = value.data;
        }
    }

    publishSelect(event) {
        const payload = { tileType: 'customer', properties: event.detail };
        publish(this.messageContext, TILE_SELECTION_MC, payload);
    }
}