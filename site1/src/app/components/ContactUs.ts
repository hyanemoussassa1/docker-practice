import {ContactMessage, ContactService} from '../services/contact';

class ContactUsController {
  /** @ngInject */
  constructor(public contactService: ContactService) {
  }

  ourContactDetails() {
    return this.contactService.retrieveOurContactDetails();
  }

  saveContactMessage(message: ContactMessage) {
    this.contactService.sendMessage(message);
  }
}

export const ContactUs: angular.IComponentOptions = {
  template: require('./ContactUs.html'),
  controller: ContactUsController,
  bindings: {
    message: '='
  }
};
