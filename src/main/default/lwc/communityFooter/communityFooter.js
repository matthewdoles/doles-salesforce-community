import { LightningElement } from 'lwc';
import FOOTER_IMAGES from '@salesforce/resourceUrl/FooterImages';

export default class CommunityFooter extends LightningElement {
  email = FOOTER_IMAGES + '/phone-receiver.png';
  phone = FOOTER_IMAGES + '/envelope.png';
  github = FOOTER_IMAGES + '/github-logo.jpg';
  trailhead = FOOTER_IMAGES + '/trailhead.png';
  linkedin = FOOTER_IMAGES + '/linkedin.png';
}
