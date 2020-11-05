import { LightningElement, api } from 'lwc';
import HEADER_IMAGES from '@salesforce/resourceUrl/HeaderImages';

export default class SalesforceJourney extends LightningElement {
  @api title;
  image;

  connectedCallback() {
    switch (this.title) {
      case 'Franco Signor':
        this.image = HEADER_IMAGES + '/franco-signor.jpg';
        break;
      case 'Johnson and Johnson':
        this.image = HEADER_IMAGES + '/johnson-and-johnson.jpg';
        break;
      case 'Trailhead':
        this.image = HEADER_IMAGES + '/ranger.png';
        break;
      default:
        this.image = HEADER_IMAGES + '/franco-signor.png';
    }
  }
}
