import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name = '';
  email = 'harish.rn1993@gmail.com';
  message = '';

  navigateToInstagram() {
    window.open("https://www.instagram.com/harishrn/", "_blank");
  }

  navigateToLinkedIn() {
    window.open("https://www.linkedin.com/in/harish-r-n-71a0a660/", "_blank");
  }

  navigateToMail() {
    const mailText = `mailto:${this.email}?subject=Job request from ${this.name}&body=${this.message}`; // add the links to body
    window.location.href = mailText;
  }

  onSendClick() {
    if (this.name === "" || this.message === "") {
      return alert("Enter all values");
    }
    alert("Sending mail");
    this.name = '';
    this.message = '';
    this.navigateToMail();
  }
}
