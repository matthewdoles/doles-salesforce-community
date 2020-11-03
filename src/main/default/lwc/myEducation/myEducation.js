import { LightningElement } from 'lwc';
import USF from '@salesforce/contentAssetUrl/usf';
import school from '@salesforce/label/c.Undergrad_School';
import major from '@salesforce/label/c.Undergrad_Major';
import honors from '@salesforce/label/c.Undergrad_Honors';
import body_1 from '@salesforce/label/c.Undergrad_Body_1';
import body_2 from '@salesforce/label/c.Undergrad_Body_2';

export default class MyEducation extends LightningElement {
  usf = USF;
  labels = {
    school,
    major,
    honors,
    body_1,
    body_2
  };
}
