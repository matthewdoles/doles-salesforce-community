import { LightningElement } from 'lwc';
import CERT_IMAGES from '@salesforce/resourceUrl/SalesforceCertificationsImages';

export default class SalesforceCertifications extends LightningElement {
  images = [
    { id: 1, url: CERT_IMAGES + '/admin.jpg' },
    { id: 3, url: CERT_IMAGES + '/js1.png' },
    { id: 2, url: CERT_IMAGES + '/app-builder.jpg' },
    { id: 4, url: CERT_IMAGES + '/pd1.jpg' }
  ];
}
