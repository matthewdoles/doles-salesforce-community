import { LightningElement, api } from 'lwc';
import UDEMY_IMAGES from '@salesforce/resourceUrl/UdemyCoursesImages';

export default class UdemyCourseHeader extends LightningElement {
  @api course;
  image;
  title;

  connectedCallback() {
    switch (this.course) {
      case 'Alexa':
        this.image = UDEMY_IMAGES + '/alexa-course.jpg';
        this.title =
          '<a href="https://www.udemy.com/course/build-your-rad-personal-assistant-with-amazon-alexa-custom-skills/">Practical Hands-on Guide for Alexa Skill Development</a>';
        break;
      case 'Electron':
        this.image = UDEMY_IMAGES + '/electron-course.jpg';
        this.title =
          '<a href="https://www.udemy.com/course/electron-from-scratch/">Electron From Scratch: Build Desktop Apps With JavaScript</a>';
        break;
      case 'MERN':
        this.image = UDEMY_IMAGES + '/mern-course.jpg';
        this.title =
          '<a href="https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/">React, NodeJS, Express & MongoDB - The MERN Fullstack Guide</a>';
        break;
      case 'Node':
        this.image = UDEMY_IMAGES + '/node-course.jpg';
        this.title =
          '<a href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/">The Complete Node.js Developer Course</a>';
        break;
      case 'PD1':
        this.image = UDEMY_IMAGES + '/PD1-course.jpg';
        this.title =
          '<a href="https://www.udemy.com/course/salesforce-platform-developer-certification/">Salesforce Certified Platform Developer I</a>';
        break;
      case 'Platform App Builder':
        this.image = UDEMY_IMAGES + '/platform-app-builder-course.jpg';
        this.title =
          '<a href="https://www.udemy.com/course/salesforce-platform-app-builder/">Salesforce Platform App Builder Certification Course</a>';
        break;
      case 'React':
        this.image = UDEMY_IMAGES + '/react-course.jpg';
        this.title =
          '<a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">React - The Complete Guide (incl Hooks, React Router, Redux)</a>';
        break;
      case 'React Native':
        this.image = UDEMY_IMAGES + '/react-native-course.jpg';
        this.title =
          '<a href="https://www.udemy.com/course/react-native-the-practical-guide/">React Native - The Practical Guide</a>';
        break;
      case 'Salesforce Admin':
        this.image = UDEMY_IMAGES + '/salesforce-admin-course.jpg';
        this.title =
          '<a href="https://www.udemy.com/course/salesforce-administrator/">The Complete Salesforce Classic Administrator Certification</a>';
        break;
      default:
        this.image = UDEMY_IMAGES + '/salesforce-admin-course.jpg';
        this.title =
          '<a href="https://www.udemy.com/course/salesforce-administrator/">The Complete Salesforce Classic Administrator Certification</a>';
        break;
    }
  }
}
