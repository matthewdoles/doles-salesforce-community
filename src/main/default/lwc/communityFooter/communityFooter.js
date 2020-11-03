import { LightningElement } from 'lwc';
import FOOTER_IMAGES from '@salesforce/resourceUrl/FooterImages';
import email from '@salesforce/label/c.Personal_Email';
import phone from '@salesforce/label/c.Personal_Phone';
import github from '@salesforce/label/c.Profile_Github';
import trailhead from '@salesforce/label/c.Profile_Trailhead';
import linkedin from '@salesforce/label/c.Profile_LinkedIN';

export default class CommunityFooter extends LightningElement {
  logo = {
    email: FOOTER_IMAGES + '/envelope.png',
    phone: FOOTER_IMAGES + '/phone-receiver.png',
    github: FOOTER_IMAGES + '/github-logo.jpg',
    trailhead: FOOTER_IMAGES + '/trailhead.png',
    linkedin: FOOTER_IMAGES + '/linkedin.png'
  };
  label = {
    email,
    phone,
    github,
    trailhead,
    linkedin
  };
}
