import { LightningElement, api } from 'lwc';
import FRANCO_SIGNOR from '@salesforce/contentAssetUrl/franco_signor_logo';
import JOHNSON_AND_JOHNSON from '@salesforce/contentAssetUrl/johnson_and_johnson';
import RANGER from '@salesforce/contentAssetUrl/ranger';

export default class SalesforceJourney extends LightningElement {
  @api title;
  image;

  connectedCallback() {
    switch (this.title) {
      case 'Franco Signor':
        this.image = FRANCO_SIGNOR;
        break;
      case 'Johnson and Johnson':
        this.image = JOHNSON_AND_JOHNSON;
        break;
      case 'Trailhead':
        this.image = RANGER;
        break;
      default:
        this.image = FRANCO_SIGNOR;
    }
  }
}
