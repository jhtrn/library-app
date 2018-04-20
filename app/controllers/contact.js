import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Contact Us',
  responseMessage: '',
  emailAddress: '',
  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),

  actions: {

    saveMessage() {
      alert(`Saving of the following \nEmail address: ${this.get('emailAddress')}` + `\nMessage: ${this.get('message')}`);
      this.set('responseMessage', `Thank you! We got your message and we'll get in touch soon!`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
