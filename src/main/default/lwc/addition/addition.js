import { LightningElement } from "lwc";

export default class Addition extends LightningElement {
  number1 = 0;
  number2 = 0;
  sum = 0;

  inputChange(event) {
    this[event.target.name] = event.target.value;
    this.addNumbers();
  }

  addNumbers() {
    this.sum = +this.number1 + +this.number2;
  }

  resetNumbers() {
    this.number1 = 0;
    this.number2 = 0;
    this.sum = 0;
  }
}
