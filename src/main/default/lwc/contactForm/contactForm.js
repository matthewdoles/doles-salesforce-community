import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactForm extends LightningElement {
  handleSubmit(event) {
    event.preventDefault();
    this.template
      .querySelector('lightning-record-edit-form')
      .submit(event.detail.fields);
  }
  handleSuccess() {
    const inputFields = this.template.querySelectorAll('lightning-input-field');
    if (inputFields) {
      inputFields.forEach((field) => {
        field.reset();
      });
    }
    const toastEvent = new ShowToastEvent({
      title: 'Submitted!',
      message: 'Thank you for reaching out, I hope to get back to you shrotly.',
      variant: 'success'
    });
    this.dispatchEvent(toastEvent);
  }
}
