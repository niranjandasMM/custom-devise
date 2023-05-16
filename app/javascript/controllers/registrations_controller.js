import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="registrations"
export default class extends Controller {
  connect() {
    console.log("COming from Regestraions_controller.js")

    {
      // const phoneInput = this.element.querySelector('[name="user[phone_number]"]');
      const phoneInput = this.element.querySelector('input[name="user[Phone]"]');
      // phoneInput.addEventListener('blur', validatePhone.bind(this));
      phoneInput.addEventListener('blur', validatePhone.bind(this, phoneInput));
    }

    
    function validatePhone(phoneInput) {
      const a = phoneInput.value;
      if (a === '') {
        return true;
      }
      const filter = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/ 
      // /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/; 
      if (filter.test(a)) {
        console.log(true);
        return true;
      } else {
        alert('Invalid phone number, please try again with country code +<1-9> 10 digits');
        setTimeout(function() {
          phoneInput.focus();
        }, 100);
        console.log(false);
        return false;
      }
    }

  }
}
