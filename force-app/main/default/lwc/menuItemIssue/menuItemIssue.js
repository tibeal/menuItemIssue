import { LightningElement } from 'lwc';

export default class MenuItemIssue extends LightningElement {

    handleSelect(event) {
        try {
            console.info('Selected: ' + event?.detail?.value);
        } catch (error) {
            console.error(error);
        }
    }
}